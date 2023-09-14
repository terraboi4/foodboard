'use client';

export default function Home() {
	return (
		<div className='p-4 text-center items-center justify-center '>
			<div className='text-5xl sm:text-4xl font-bold p-2'>FoodBoard</div>
			<div className='popover'>
				<label className='popover-trigger my-2 btn' tabIndex={0}>
					Instructions
				</label>
				<div className='popover-content' tabIndex={0}>
					<div className='popover-arrow'></div>
					<div className='p-4 text-sm'>
						FoodBoard is a way to track your calories. <br />
						<ul className='space-y-1 list-decimal list-inside'>
							<li>Click on a restaurant below</li>
							<li>Select the items that you ordered</li>
							<li>Click "Add"</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-3 space-x-5'>
				<div>sg</div>
				<div>cfa</div>
				<div>mcd</div>
			</div>

			<div className='flex mx-auto rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 w-2/3 overflow-x-auto'>
				<table className='table bg-gray-2'>
					<tbody>
						<tr>
							<th className='font-bold'>
								<span className='dot dot-warning'></span> 1
							</th>

							<td>Cy Ganderton</td>
							<td>3,463 cal</td>
						</tr>
						<tr>
							<th className='font-bold'>
								<span className='dot'></span> 2
							</th>

							<td>Hart Hagerty</td>
							<td>2,530 cal</td>
						</tr>
						<tr>
							<th className='font-bold'>
								<span className='dot dot-warning'></span> 3
							</th>

							<td>Brice Swyre</td>
							<td>1,567 cal</td>
						</tr>
						<tr>
							<th className='font-bold'>4</th>

							<td>Shelton Rios</td>
							<td>1,567 cal</td>
						</tr>
						<tr>
							<th className='font-bold'>5</th>

							<td>Helen Vang</td>
							<td>1,567 cal</td>
						</tr>
						<tr>
							<th className='font-bold'>59</th>

							<td>terraboi4</td>
							<td>1290 cal</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
