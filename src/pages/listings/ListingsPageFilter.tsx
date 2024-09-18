// import {
//   Button,
//   ChevronDown,
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from '@/components/ui';

// export const ListingsPageFilter = () => {
//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild className="group">
//         <Button variant="ghost">
//           <span>რეგიონი</span>
//           <ChevronDown className="transition-transform group-data-[state=open]:-rotate-180" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         align="start"
//         className="-ml-1.5 rounded-10 border p-6 shadow-filter-content"
//         side="bottom"
//         sideOffset={10}
//         onCloseAutoFocus={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <DropdownMenuLabel className="p-0 font-medium leading-1.2">
//           რეგიონის მიხედვით
//         </DropdownMenuLabel>
//         <div className="mt-6 grid grid-cols-3 gap-x-[3.125rem] gap-y-4">
//           {regions.map((region) => (
//             <DropdownMenuCheckboxItem
//               key={region.id}
//               checked={checkedRegions[region.id] ?? false}
//               className="gap-2 p-0 data-[highlighted]:bg-transparent data-[highlighted]:text-foreground/80"
//               iconClassName="stroke-background"
//               id={`region-${region.id.toString()}`}
//               spanClassName="h-[1.25rem] w-[1.25rem]
// rounded-2 border group-data-[state=checked]:border-success group-data-[state=checked]:bg-success"
//               onCheckedChange={() => {
//                 handleCheckedChange(region.id);
//               }}
//               onSelect={(e) => {
//                 e.preventDefault();
//               }}
//             >
//               {region.name}
//             </DropdownMenuCheckboxItem>
//           ))}
//         </div>
//         <div className="mt-8 w-full">
//           <Button className="ml-auto block" variant="primary_small">
//             არჩევა
//           </Button>
//         </div>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };
