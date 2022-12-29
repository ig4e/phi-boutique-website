import React from "react";
import { Link } from "react-router-dom";

function NotFoundError() {
	return (
		<div className="overflow-hidden">
			<div className="grid place-items-center w-full h-[90vh]">
				<div className="flex flex-col items-center gap-2">
					<div className="text-center">
						<h1 className="text-5xl font-black">404</h1>
						<h1 className="text-xl">Page Not Found</h1>

						<div className="mt-4">
							<Link
								to={"/en"}
								className="bg-primary px-3 py-2 rounded-md"
							>
								<span className="font-semibold">Go Back</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotFoundError;
