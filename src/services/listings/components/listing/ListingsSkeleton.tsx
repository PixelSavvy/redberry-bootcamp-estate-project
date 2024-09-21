/* eslint-disable react/no-array-index-key */
import { Card, CardHeader, Skeleton } from '@/components/ui';

export const ListingsSkeleton = () => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map((_, index) => (
        <li key={index}>
          <Card className="cursor-pointer rounded-14 p-0">
            <CardHeader className="p-0">
              <Skeleton className="h-48 w-full rounded-t-14" />{' '}
              {/* Скелет изображения */}
              <div className="p-6">
                <Skeleton className="mb-1.5 h-8 w-3/4" />{' '}
                {/* Скелет заголовка */}
                <div className="flex flex-col items-start justify-start gap-0.5 text-foreground/70">
                  <div className="flex items-center justify-start gap-0.5">
                    <Skeleton className="h-4 w-1/4" /> {/* Скелет адреса */}
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-8">
                    <div className="flex items-center justify-between gap-0.5">
                      <Skeleton className="h-4 w-1/4" />{' '}
                      {/* Скелет количества спален */}
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                    <div className="flex items-center justify-between gap-0.5">
                      <Skeleton className="h-4 w-1/4" /> {/* Скелет площади */}
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                    <div className="flex items-center justify-between gap-0.5">
                      <Skeleton className="h-4 w-1/4" /> {/* Скелет ZIP-кода */}
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
};
