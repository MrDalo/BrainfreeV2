import Image from 'next/image';
import IntroSection from './components/IntroSection';
import MatrixSection from './components/MatrixSection';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start bg-primary-green text-primary-black lg:items-start">
			<IntroSection />

			<MatrixSection />

			<Footer />
		</main>
	);
}
