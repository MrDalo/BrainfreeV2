import Image from 'next/image';
import IntroSection from '../components/introSection';
import MatrixSection from '../components/matrixSection';
import { Metadata } from 'next';
import Footer from '../components/footer';

export const metadata: Metadata = {
	title: 'Brainfree',
	description: 'Prioritize with Eisenhower matrix'
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start bg-primary-green text-primary-black lg:items-start">
			<IntroSection />

			<MatrixSection />

			<Footer />
		</main>
	);
}
