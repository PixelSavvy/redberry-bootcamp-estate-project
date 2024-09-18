// /* eslint-disable no-console */
// import { useEffect, useState } from 'react';

// import { ListingsPageFilter } from '@/services/filter';

// interface Region {
//   id: number;
//   name: string;
// }

// export const ListingsPage = () => {
//   const [checkedRegions, setCheckedRegions] = useState<Record<number, boolean>>(
//     {},
//   );
//   const [regions, setRegions] = useState<Region[]>([]);

//   useEffect(() => {
//     const fetchRegions = async () => {
//       const response = await fetch(
//         'https://api.real-estate-manager.redberryinternship.ge/api/regions',
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             authorization: 'Bearer 9d0a57d8-74b8-4beb-8549-6dd161378d8c',
//           },
//         },
//       );

//       if (!response.ok) {
//         console.log('error');
//       }

//       const data = (await response.json()) as Region[];
//       setRegions(data);

//       // Инициализация состояния для каждого региона
//       const initialCheckedState: Record<number, boolean> = {};
//       data.forEach((region: { id: number }) => {
//         initialCheckedState[region.id] = false; // По умолчанию все не выбраны
//       });
//       setCheckedRegions(initialCheckedState);
//     };

//     void fetchRegions();
//   }, []);

//   const handleCheckedChange = (regionId: number) => {
//     setCheckedRegions((prevState) => ({
//       ...prevState,
//       [regionId]: !prevState[regionId], // Переключение состояния конкретного региона
//     }));
//   };

//   return (
//     <section className="mt-76 w-full">
//       <div className="flex items-center justify-between">
//         <section className="flex items-center justify-between gap-6 rounded-10 border p-[0.375rem]">
//           <ListingsPageFilter />
//         </section>
//       </div>
//     </section>
//   );
// };
