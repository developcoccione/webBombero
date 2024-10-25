import { createSignal, onCleanup, onMount } from 'solid-js';
import Box from '@suid/material/Box';

export default function AnimatedText() {
    // Signal para controlar cuándo aparece cada texto
    const [isVisible1, setIsVisible1] = createSignal(false);
    const [isVisible2, setIsVisible2] = createSignal(false);

    // Función para observar cuándo un elemento entra en la pantalla
    const createObserver = (setIsVisible: (visible: boolean) => void) => {
        return new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
    };

    let box1Ref: HTMLDivElement | undefined;
    let box2Ref: HTMLDivElement | undefined;

    // Configuración de observadores
    onMount(() => {
        const observer1 = createObserver(setIsVisible1);
        const observer2 = createObserver(setIsVisible2);
        
        if (box1Ref) observer1.observe(box1Ref);
        if (box2Ref) observer2.observe(box2Ref);

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
                    fontSize: "150%",
                    opacity: isVisible1() ? 1 : 0,
                    transform: isVisible1() ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    fontFamily: "serif"
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic corrupti voluptatum magni aperiam doloremque illum consequatur, dolores ab impedit laboriosam earum dolorem minima temporibus magnam, voluptas dolor, labore recusandae!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A non in repudiandae sapiente quaerat quam nostrum quasi dolore soluta voluptates quo ad temporibus corrupti officia, omnis, ex rerum. Illum, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod quam, reprehenderit alias nam voluptate sapiente porro eveniet veritatis saepe numquam aliquid temporibus cupiditate sunt corrupti maiores cum ex ut.
            </Box>
            <br />
            <Box
                ref={box2Ref}
                class="container"
                component="div"
                sx={{
                    textAlign: "justify",
                    marginBottom: "9%",
                    fontSize: "150%",
                    opacity: isVisible2() ? 1 : 0,
                    transform: isVisible2() ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    fontFamily: "serif"
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic corrupti voluptatum magni aperiam doloremque illum consequatur, dolores ab impedit laboriosam earum dolorem minima temporibus magnam, voluptas dolor, labore recusandae!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A non in repudiandae sapiente quaerat quam nostrum quasi dolore soluta voluptates quo ad temporibus corrupti officia, omnis, ex rerum. Illum, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod quam, reprehenderit alias nam voluptate sapiente porro eveniet veritatis saepe numquam aliquid temporibus cupiditate sunt corrupti maiores cum ex ut.
            </Box>
        </>
    );
}
