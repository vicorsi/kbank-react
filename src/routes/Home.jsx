import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const icons = [
    {
        icon: 'wallet-icon',
        title: 'Empréstimos com juros baixos'
    },
    {
        icon: 'secure-icon',
        title: '100% Seguro!'
    },
    {
        icon: 'chart-icon',
        title: '200% do CDI'
    },
    {
        icon: 'cards-icon',
        title: 'Sem anuidade'
    }
];

export default function Home() {
    return (
        <>

            <Navbar />
            <a href="/login">
                <img src="/images/hero-banner.png" alt="" />
            </a>

            <section>
                <div className='container mx-auto py-20 px-4'>
                    <h2 className='text-4xl lg:text-5xl main-title mb-14 max-w-lg mx-auto text-red-400 text-center '>Confira as nossas vantagens:</h2>
                    <div className='flex flex-col lg:flex-row justify-center gap-20 mx-auto'>
                        {icons.map(i => (
                            <div className='flex flex-col gap-4 items-center'>
                                <img src={`/images/${i.icon}.svg`} alt="Ícone de benefício da Korsi Bank"  style={{maxWidth: '80px'}}/>
                                <p>{i.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='container flex flex-col lg:flex-row gap-16 mx-auto py-20 px-4'>
                    <div className='mt-10 flex flex-col items-center w-full lg:w-6/12'>
                        <h2 className='text-4xl lg:text-4xl main-title mb-14 max-w-lg mx-auto text-red-400 text-center'>Invista seu dinheiro!</h2>
                        <p className='text-lg text-center'>Nosso objetivo é realizar seus sonhos, então não perca tempo e comece agora mesmo!</p>
                        <a href="/login" className='ease-in-out duration-300 hover:bg-red-700 block mt-14 px-6 py-4 rounded-3xl text-white bg-red-400'>Abrir conta</a>
                    </div>
                    <img className='w-full lg:w-6/12' src="/images/about-img.png" alt="Senhor sorridente contando dinheiro" />
                </div>
                
            </section>
            
            <Footer />
        </>
    )
}