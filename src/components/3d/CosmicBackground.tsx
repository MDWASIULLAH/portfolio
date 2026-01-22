"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
// import { useScroll } from "framer-motion"; // We might link scroll later

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StarField(props: any) {
    const ref = useRef<THREE.Points>(null!);

    const sphere = useMemo(() => {
        const particles = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.2 + Math.random() * 0.5; // Radius variations

            particles[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            particles[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            particles[i * 3 + 2] = r * Math.cos(phi);
        }
        return particles;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#0050FF"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function BlackHoleCore() {
    // A placeholder for the "Black Hole" event horizon - a dark sphere causing occlusion or just the center
    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#000000" />
        </mesh>
    );
}

function AccretionDisk() {
    const ref = useRef<THREE.Points>(null!);
    // Generate a flat disk of particles
    const particles = useMemo(() => {
        const count = 8000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color1 = new THREE.Color("#0050FF");
        const color2 = new THREE.Color("#00D6FF");

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 1.1 + Math.random() * 2; // Disk 
            // Spiral effect can be added here

            // Check falloff
            const spreadY = (Math.random() - 0.5) * 0.2 * (3.5 - radius); // Thinner at edges

            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = spreadY;
            positions[i * 3 + 2] = Math.sin(angle) * radius;

            // Color gradient based on radius
            const mixedColor = color1.clone().lerp(color2, (radius - 1.1) / 2);
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.2; // faster spin
        }
    });

    return (
        <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

export default function CosmicBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#050505] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
                <Suspense fallback={null}>
                    <color attach="background" args={['#050505']} />

                    {/* Ambient subtle light */}
                    <ambientLight intensity={0.5} />

                    {/* The Black Hole Concept */}
                    <group rotation={[0.4, 0, 0]}> {/* Tilted view */}
                        <BlackHoleCore />
                        <AccretionDisk />
                    </group>

                    {/* Distant stars */}
                    <StarField />

                    {/* Optional: Post processing could go here for bloom */}
                    {/* <EffectComposer><Bloom ... /></EffectComposer> */}
                </Suspense>
            </Canvas>
        </div>
    );
}
