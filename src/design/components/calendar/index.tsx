import {
  endOfDay,
  format,
  isEqual,
  isToday,
  isWithinInterval,
  startOfDay,
} from "date-fns";
import { KeyboardIcon } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useCalendar } from "./use-calendar";

export const Calendar = () => {
  const { calendarData } = useCalendar();

  const featuresDeliveries = [
    {
      label: "Entrega 12",
      step: "Ideação",
      status_step: <KeyboardIcon />,
      event: {
        start: new Date(2023, 8, 1),
        end: new Date(2023, 8, 10),
      },
    },
    {
      label: "Entrega 13",
      step: "Ideação",
      status_step: <KeyboardIcon />,
      event: {
        start: new Date(2023, 8, 3),
        end: new Date(2023, 8, 20),
      },
    },
    {
      label: "Entrega 14",
      step: "Ideação",
      status_step: <KeyboardIcon />,
      event: {
        start: new Date(2023, 9, 23),
        end: new Date(2023, 9, 27),
      },
    },
  ];

  const isDayInEvent = (day: any, start: any, end: any) =>
    isWithinInterval(day, {
      start: startOfDay(start),
      end: endOfDay(end),
    });

  const bulletRef = useRef(null);

  useEffect(() => {
    const bullet: any = bulletRef.current;

    const updateBulletPosition = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const calendar = bullet.parentElement;
      const calendarWidth = calendar.offsetWidth;
      console.log(calendarWidth);
      const bulletWidth = (calendarWidth / (24 * 60)) * totalMinutes;
      bullet.style.width = `${bulletWidth}px`;
    };

    // Atualize a posição do bullet inicialmente
    updateBulletPosition();

    // Atualize a posição do bullet a cada minuto
    const intervalId = setInterval(updateBulletPosition, 60000); // 60000 ms = 1 minuto

    // Limpe o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [opened, setOpened] = useState(0);

  return (
    <div className="w-full overflow-x-scroll scroll-smooth rounded-lg flex border border-default bg-foreground">
      {calendarData.map((calendar, idx_calendarData) => (
        <Fragment key={idx_calendarData.toString()}>
          {idx_calendarData <= 0 && (
            <div className="flex flex-col min-w-[300px] w-[300px] border-r border-default">
              <div className="flex items-center justify-center h-[97px] border-b-default border-b">
                Projeto 1
              </div>
              <div className="flex w-full flex-col">
                {featuresDeliveries.map((feature, idx_feature) => (
                  <div
                    key={feature.label + idx_feature.toString()}
                    className="w-full flex border-b-default border-b items-center justify-center"
                    onClick={() => setOpened(idx_feature)}
                    style={{ height: idx_feature === opened ? 106 : 56 }}
                  >
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-max flex flex-col">
            <div className="w-full flex items-center justify-center h-14 border-r-default border-r">
              {calendar.month}
            </div>
            <div className="w-full flex border-b-default border-r-default border-b border-r text-xs">
              {calendar.days.map((day: any, idx: any) => (
                <div
                  key={day + idx}
                  className="w-14 min-w-[56px] flex items-center justify-center text-xs border-r-default border-r last:border-r-0"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {format(day, "d")}
                  </div>
                </div>
              ))}
            </div>
            {/* FIM do cabeçalho com numeros dos dias do mes */}

            {featuresDeliveries.map((feature, idx_feature) => {
              return (
                <div className="flex" key={feature.label + idx_feature}>
                  <div
                    className="w-full flex border-b-default border-r-default border-b border-r text-xs"
                    onClick={() => setOpened(idx_feature)}
                    style={{ height: idx_feature === opened ? 106 : 56 }}
                  >
                    {calendar.days.map((day: any, idx_feature: any) => (
                      <div
                        key={day + idx_feature}
                        className={`w-14 min-w-[56px] flex items-center justify-center text-xs border-r-default border-r last:border-r-0`}
                        style={{ borderRight: "none" }}
                      >
                        {isDayInEvent(
                          day,
                          feature.event.start,
                          feature.event.end
                        ) && (
                          <div
                            className={`w-14 h-[70%] z-40 bg-primary flex justify-center ${
                              isEqual(new Date(day), feature.event.start) &&
                              "rounded-l-xl ml-[6px]"
                            } ${
                              isEqual(new Date(day), feature.event.end) &&
                              "rounded-r-xl mr-[6px]"
                            }`}
                          />
                        )}
                        {isToday(day) && (
                          <div className="w-14 h-full z-50 text-[#000] overflow-hidden relative">
                            <div className="bullet" ref={bulletRef} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
