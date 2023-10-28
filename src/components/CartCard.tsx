import { Card, CardBody, Image } from "@nextui-org/react";

export default function CartCard() {
	return (
		<Card
			isBlurred
			className="border-none bg-background/60 dark:bg-default-100/50 max-w-[450px] mt-[10px] "
			shadow="sm">
			<CardBody>
				<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
					<div className="relative col-span-6 md:col-span-4">
						<Image
							alt="Album cover"
							className="object-cover"
							height={200}
							shadow="md"
							src="https://nextui.org/images/album-cover.png"
							width="100%"
						/>
					</div>

					<div className="flex flex-col col-span-6 md:col-span-8">
						<div className="flex justify-between items-start">
							<div className="flex flex-col gap-0">
								<h3 className="font-semibold text-foreground/90">Daily Mix</h3>
								<p className="text-small text-foreground/80">12 Tracks</p>
								<h1 className="text-large font-medium mt-2">Frontend Radio</h1>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}
