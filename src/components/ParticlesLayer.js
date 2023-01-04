import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesLayer = (props) => {


    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
      <>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
                fullScreen: {
                    zIndex: -1
                },
                background: {
                    color: {
                        value: "#191414",
                    },
                },
                fpsLimit: 0,
                interactivity: {
                    events: {

                        resize: true,
                    },

                },
                particles: {

                    links: {
                        color: props.colour,
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },

                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 1 },
                    },
                },
                detectRetina: true,
            }}
        />


        </>
    );
};

export default ParticlesLayer;