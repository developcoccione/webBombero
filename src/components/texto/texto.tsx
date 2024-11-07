import { createSignal, onCleanup, onMount } from 'solid-js';
import {Box,  Card, CardContent,} from '@suid/material';

export default function AnimatedText() {
    // Signal para controlar cuándo aparece cada texto
    const [isVisible1, setIsVisible1] = createSignal(false);
    const [isVisible2, setIsVisible2] = createSignal(false);
    const [isVisible3, setIsVisible3] = createSignal(false);

    // Función para observar cuándo un elemento entra en la pantalla
    const createObserver = (setIsVisible: (visible: boolean) => void) => {
        return new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
    };

    let box1Ref: HTMLDivElement | undefined;
    let box2Ref: HTMLDivElement | undefined;
    let box3Ref: HTMLDivElement | undefined;

    // Configuración de observadores
    onMount(() => {
        const observer1 = createObserver(setIsVisible1);
        const observer2 = createObserver(setIsVisible2);
        
        if (box1Ref) observer1.observe(box1Ref);
        if (box2Ref) observer2.observe(box2Ref);
        if (box3Ref) observer2.observe(box3Ref);

        // Limpiar observadores al desmontar
        onCleanup(() => {
            observer1.disconnect();
            observer2.disconnect();
        });
    });

    return (
        <>
            <Box
                ref={box1Ref}
                class="container"
                component="div"
                sx={{
                    textAlign: "justify",
                    marginTop: '5%',
                    marginBottom: "1%",
                    opacity: isVisible1() ? 1 : 0,
                    transform: isVisible1() ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    
                    
                }}
            >
                <Card sx={{ minWidth: 100}}>
                    <CardContent sx={{ fontSize: "150%", fontFamily: "Segoe UI", borderLeft: '10px solid #fbf11f',
                    borderRight: '10px solid #fbf11f' }}>
                        <b><big>El GRUMAE (Grupo Motorizado de Atención de Emergencias):</big></b> realiza atención de emergencia pre-hospitalarias, rescaté, control y apoyo en incendios, comisiones y/o cualquier emergencia, es el Primer Equipo de respuesta para atender la emergencias por medio de la estabilización y atención primaría de Lesionados, control de incendios en face incipientes, y atención de emergencia de cualquiera indole
                    </CardContent>
                </Card>    
            </Box>
            <br />
            <Box
                ref={box2Ref}
                class="container"
                component="div"
                sx={{
                    textAlign: "justify",
                    opacity: isVisible2() ? 1 : 0,
                    transform: isVisible2() ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                   
                }}
            >
               <Card sx={{ minWidth: 100}}>
                    <CardContent sx={{ fontSize: "150%", fontFamily: "Segoe UI",  borderLeft: '10px solid #242088',
                    borderRight: '10px solid #242088' }}>
                    <b><big>Unidades de rescate:</big></b> unidad de emergencia empleada para la atención de emergencia en materia de colisiones, rescaté, incendio, materiales peligrosos y apoyo de traslado de Lesionados, formada por un personal capacitado multidisciplinario.
                    </CardContent>
                </Card>    
            </Box>
            <br />
            <Box
                ref={box3Ref}
                class="container"
                component="div"
                sx={{
                    textAlign: "justify",
                    marginBottom: "9%",
                    opacity: isVisible2() ? 1 : 0,
                    transform: isVisible2() ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                   
                }}
            >
               <Card sx={{ minWidth: 100}}>
                    <CardContent sx={{ fontSize: "150%", fontFamily: "Segoe UI",  borderLeft: '10px solid #db1322',
                    borderRight: '10px solid #db1322' }}>
                    <b><big>Unidad de incendio:</big></b> unidad de emergencia destinada para el combate de incendios Forestales, vehículares y estructurales, y la atención de Colisiones y Volcamiento de vehículos con herramientas y equipos especializados en materia de incendio y rescate
                    </CardContent>
                </Card>    
            </Box>
        </>
    );
}
