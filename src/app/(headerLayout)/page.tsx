import Image from 'next/image';
import IntroSection from '../components/intro-section';
import MatrixSection from '../components/matrix-section';
import Footer from '../components/footer';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start bg-primary-green text-primary-black lg:items-start">
			<IntroSection />

			<MatrixSection />

			<Footer />
		</main>
	);
}
