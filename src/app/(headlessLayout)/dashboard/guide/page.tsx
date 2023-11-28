import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const DashboardPage = async () => {
	// const status = await getServerAuthSession();
	// console.log(status);
	// if (!status) {
	// 	// User unauthenticated, redirect to home
	// 	redirect('/');
	// }
	return (
		<div className=" flex flex-col items-center justify-center text-white">
			<h1 className=" text-[3rem] font-bold">Guide</h1>
			<div className="flex flex-col items-start justify-start gap-5">
				<h2 className=" text-[2rem]" id="matrix">
					Eisenhowerova matica
				</h2>
				<div>
					<span>V</span> živote nás čaká veľa povinnosti, ktoré musíme skôr či
					neskôr splniť. Tieto aktivity môžu byť spojené so školou, prácou,
					túžbou po úspechu alebo túžbou mať všetko načas naplánované,
					zorganizované alebo splnené. Time management je niečo, o čom sa hovorí
					len zriedka v spoločnosti a preto nepoznáme správne techniky a metódy
					správneho Time managementu. Jednou z techník je Eissenhowerova matica,
					ktorá Vám pomôže s ľahkosťou a rýchlosťou určiť, ktoré aktivity by ste
					mali začať robiť ako prvé. Táto technika je užitočná hlavne v momente,
					ak máte veľa povinností a sami neviete, s ktorou začať, pretože máte
					pocit, že každá z nich je pre Vás dôležitá.
				</div>
				<div>
					<b>Eisenhowerova matica</b> sa skladá zo štyroch kvadrantov, kde každý
					jeden z nich značí prioritu, ktorú máme venovať danej aktivite.
					Pomyselné osi nám pomáhajú k určeniu správnej priority. Osi značia:
					Urgentnosť/Neurgentnosť, Dôležitosť/Nedôležitosť. Na základe danej
					aktivity môžeme teda určiť, či je aktivita urgentná/neurgentná a
					dôležitá/nedôležitá. Po zodpovedaní týchto otázok sme schopní učiť
					správnu prioritu danej aktivity a umiestniť ju do jedného z
					kvadrantov.
				</div>
				{/* <img src="matica.jpg" alt="matica"> */}
				<Image
					src="/img/matrix2.png"
					height={600}
					width={600}
					alt="matica"
					className=" self-center"
				/>
				<div></div>
				<p>
					<b>Čo je dôležité a čo urgentné?</b>
				</p>
				<p>
					<b>Urgentnosť:</b> hovorí o tom, čo horí, a čo nie. Ak je úloha časovo
					senzitívna (mám externý deadline na dane, deadline na IFJ projekt je
					za týždeň a môj tím ešte nezačal pracovať), zdroje na jej vykonanie sú
					obmedzené časom (kolega mi odchádza zajtra na dovolenku), je kritická
					pre začatie inej úlohy, patrí medzi urgentné.
				</p>
				<p>
					<b>Dôležitosť:</b> miera toho, ako výrazne ma dokáže daný krok,
					aktivita, projekt, ovplyvniť alebo posunúť k naplneniu mojich cieľov,
					nakoľko prispieva k môjmu želanému stavu. Príkladom pre študenta môže
					byť projekt, bez ktorého nezíska zápočet a predmet bude musieť
					opakovať.
				</p>
				<div>
					<p>
						<b>
							Čo v prípade, že sme pre našu aktivitu našli správny kvadrant v
							matici?
						</b>
					</p>
					<p>Mali by ste postupovať nasledovne:</p>
					<p>
						<b>1. Urgentné - dôležité:</b> Urob hneď!
					</p>
					<p>
						<b>2. Neurgetné - dôležité:</b> Naplánuj si!
					</p>
					<p>
						<b>3. Urgentné - nedôležité:</b> Deleguj!
					</p>
					<p>
						<b>4. Neurgetné - nedôležité:</b> Nerob, odstráň!
					</p>
					<p>
						Veríme že Vám Eisenhowerova matica pomôže s Vašim Time managementom
						a že našu aplikáciu využijete naplno.
					</p>
					<p>
						<b>Tím BrainFree.</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
