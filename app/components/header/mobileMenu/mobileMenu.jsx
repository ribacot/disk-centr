import { Dialog } from "@headlessui/react";
import Navigation from "../navigation/navigation";

export default function MobileMenu({onClick, isOpen, links}) {
	return (
		<Dialog
			as="div"
			className="lg:hidden"
			open={isOpen}
			onClose={onClick}
		>
			<div className="fixed inset-0 z-50" />
            <Dialog.Backdrop className="text-w">
			<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-violet-400 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div className="flex items-center justify-between"> 
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						Logo
					</a>
					<button
						type="button"
						className="-m-2.5 rounded-md p-2.5 text-gray-700"
						onClick={() => onClick(false)}
					>
						<span className="sr-only">Close menu</span>X
					</button>
				</div>
				<div className="mt-10 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						{/* <div className="space-y-2 py-6">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									{item.name}
								</a>
							))}
						</div> */}
						<Navigation links={links} className="space-y-2 py-6 flex flex-col gap-6" />
						{/* <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log in
            </a>
          </div> */}
					</div>
				</div>
			</Dialog.Panel>
            </Dialog.Backdrop>
		</Dialog>
	);
}
