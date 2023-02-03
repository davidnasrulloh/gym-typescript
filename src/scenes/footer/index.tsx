import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias veniam exercitationem expedita repellendus repellat. Atque, mollitia! Suscipit voluptates voluptatibus non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vero tenetur ipsam id sapiente exercitationem nulla facilis perferendis, eius velit ex iusto, maiores animi obcaecati doloremque numquam quis est rem.</p>
                    <p>© David belajar typescript + react</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0 flex flex-col">
                    <h4 className="font-bold">Links</h4>
                    <a target="_blank" className="my-5" href="https://www.instagram.com/davidnasrulloh_/">Instagram</a>
                    <a target="_blank" href="https://www.linkedin.com/in/davidnasrulloh/">Linkedin</a>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempat jauh disana ntah deh kemana ya wkwkkw</p>
                    <p>(+62)425-122-3120</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;