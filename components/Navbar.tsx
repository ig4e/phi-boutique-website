import React from "react";
import { Bars3Icon, HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Select from "@radix-ui/react-select";

function Navbar() {
	const router = useRouter();
	const locale: "en" | "ar" = (router.locale as any) || "en";

	return (
		<>
			<nav className="fixed top-0 inset-x-0 bg-primary py-2 z-40 max-w-lg mx-auto">
				<div className="flex flex-col gap-2 container mx-auto">
					<div className="flex items-center justify-between">
						<Select.Root
							defaultValue={locale}
							onValueChange={(newLocale) => {
								router.push(router.pathname, router.asPath, {
									locale: newLocale,
								});
							}}
						>
							<Select.Trigger>
								<Select.Value
									className="uppercase placeholder:uppercase"
									placeholder={locale.toUpperCase()}
								/>
								<Select.Icon />
							</Select.Trigger>

							<Select.Portal>
								<Select.Content className="bg-white z-50 rounded-md p-2 border">
									<Select.ScrollUpButton />
									<Select.Viewport className="space-y-2">
										{router.locales!.map((locle) => (
											<Select.Item
												key={locle}
												value={locle}
												className="text-center px-4 SelectItem rounded text-lg"
											>
												<Select.ItemText>
													{locle.toUpperCase()}
												</Select.ItemText>
												<Select.ItemIndicator />
											</Select.Item>
										))}
									</Select.Viewport>
									<Select.ScrollDownButton />
								</Select.Content>
							</Select.Portal>
						</Select.Root>

						<div className="flex items-center gap-4">
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 14.906 17.047"
							>
								<path
									d="M60.133,19.431a3.652,3.652,0,0,1-.316-.184,4.441,4.441,0,0,1-.811-.689,3.826,3.826,0,0,1-.914-1.886h0A2.323,2.323,0,0,1,58.059,16H55.3V26.655c0,.143,0,.284-.006.424,0,.017,0,.033,0,.052a.115.115,0,0,1,0,.024v.006a2.34,2.34,0,0,1-1.177,1.857,2.3,2.3,0,0,1-1.14.3,2.34,2.34,0,0,1,0-4.679,2.3,2.3,0,0,1,.716.113l0-2.806A5.119,5.119,0,0,0,49.751,23.1a5.408,5.408,0,0,0-1.18,1.455,5.042,5.042,0,0,0-.608,2.314,5.462,5.462,0,0,0,.3,1.829v.007a5.385,5.385,0,0,0,.748,1.364A5.6,5.6,0,0,0,50.2,31.2V31.19l.007.007a5.156,5.156,0,0,0,2.813.847,4.98,4.98,0,0,0,2.088-.462,5.239,5.239,0,0,0,1.7-1.274,5.3,5.3,0,0,0,.924-1.535,5.751,5.751,0,0,0,.333-1.756V21.364c.033.02.479.315.479.315a6.373,6.373,0,0,0,1.642.679,9.457,9.457,0,0,0,1.685.231V19.853A3.573,3.573,0,0,1,60.133,19.431Z"
									transform="translate(-47.458 -15.5)"
									fill="none"
									stroke="#5f7874"
									strokeWidth="1"
								/>
							</svg>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16.12 16.12"
							>
								<path
									d="M8.06,1.452c2.152,0,2.407.008,3.257.047a4.462,4.462,0,0,1,1.5.278,2.5,2.5,0,0,1,.927.6,2.5,2.5,0,0,1,.6.927,4.461,4.461,0,0,1,.278,1.5c.039.85.047,1.1.047,3.257s-.008,2.407-.047,3.257a4.461,4.461,0,0,1-.278,1.5,2.669,2.669,0,0,1-1.53,1.53,4.459,4.459,0,0,1-1.5.278c-.85.039-1.1.047-3.257.047S5.653,14.66,4.8,14.621a4.459,4.459,0,0,1-1.5-.278,2.5,2.5,0,0,1-.927-.6,2.5,2.5,0,0,1-.6-.927,4.46,4.46,0,0,1-.278-1.5c-.039-.85-.047-1.1-.047-3.257S1.46,5.653,1.5,4.8a4.46,4.46,0,0,1,.278-1.5,2.5,2.5,0,0,1,.6-.927,2.5,2.5,0,0,1,.927-.6A4.461,4.461,0,0,1,4.8,1.5c.85-.039,1.1-.047,3.257-.047M8.06,0C5.871,0,5.6.009,4.737.049A5.916,5.916,0,0,0,2.78.423a3.951,3.951,0,0,0-1.428.93A3.951,3.951,0,0,0,.423,2.78,5.916,5.916,0,0,0,.048,4.737C.009,5.6,0,5.871,0,8.06s.009,2.463.048,3.323A5.916,5.916,0,0,0,.423,13.34a3.951,3.951,0,0,0,.93,1.428,3.951,3.951,0,0,0,1.428.93,5.915,5.915,0,0,0,1.957.375c.86.039,1.134.048,3.323.048s2.463-.009,3.323-.048A5.915,5.915,0,0,0,13.34,15.7,4.121,4.121,0,0,0,15.7,13.34a5.917,5.917,0,0,0,.375-1.957c.039-.86.048-1.134.048-3.323s-.009-2.463-.048-3.323A5.917,5.917,0,0,0,15.7,2.78a3.951,3.951,0,0,0-.93-1.428A3.951,3.951,0,0,0,13.34.423,5.916,5.916,0,0,0,11.383.049C10.524.009,10.249,0,8.06,0Zm0,3.921A4.139,4.139,0,1,0,12.2,8.06,4.139,4.139,0,0,0,8.06,3.921Zm0,6.826A2.687,2.687,0,1,1,10.747,8.06,2.687,2.687,0,0,1,8.06,10.747Zm5.27-6.989a.967.967,0,1,1-.967-.967A.967.967,0,0,1,13.33,3.758Z"
									transform="translate(0 0)"
									fill="#5f7874"
								/>
							</svg>
						</div>
					</div>
					<Link href={"/"} locale={locale}>
						<div className="flex items-center justify-between">
							<span className="font-bold">LOGO HERE</span>
							<Bars3Icon className="w-6 h-6 stroke-2"></Bars3Icon>
						</div>
					</Link>
				</div>
			</nav>
			<div className="h-[72px]"></div>
		</>
	);
}

export default Navbar;
