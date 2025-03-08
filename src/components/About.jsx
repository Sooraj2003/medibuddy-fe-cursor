const About = () => {
    return (
        <section className="max-w-[1440px] mx-auto overflow-hidden">
            <div className="px-4 lg:px-8 py-12 md:py-20">
                <div className="flex flex-col items-center">
                    
                    <figure className="w-full flex justify-center">
                        <img
                            className="w-full max-w-4xl md:w-4/5 lg:w-3/4 h-auto object-contain"
                            src="/assets/about.svg"
                            alt="About MediBuddy services"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default About
