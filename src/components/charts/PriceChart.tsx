"use client";

import { PriceWithTimeNum } from "@/app/marketplace/PriceHistory";
import { GitCommitHorizontal } from "lucide-react";
import moment from "moment";
import {
  CartesianGrid,
  Label,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { Props } from "recharts/types/component/DefaultLegendContent";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { useSidebar } from "../ui/sidebar";

const timeFormatter = (value: string | number, _index: number = 0) => {
  return moment(value).format("MMM D HH:mm");
};

const dateFormatter = (value: string | number) => {
  return moment(value).format("MMM D");
};

const hoursOnlyFormatter = (value: string | number) => {
  return moment(value).format("HH:mm");
};

export const numberWithCommas = (
  value: string | number,
  _index?: number
) => {
  const abbrevNumber = Number(value).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return abbrevNumber;
};

const xAxisBounds = (timeRange: string) => {
  return 0;

  // if (timeRange === "1d") {
  //   // 1 hr
  //   return 1000 * 60 * 60 * 1;
  // } else if (timeRange === "7d") {
  //   // 12 hrs
  //   return 1000 * 60 * 60 * 12;
  // } else if (timeRange === "30d") {
  //   // 3 day
  //   return 1000 * 60 * 60 * 24 * 3;
  // }

  // // 1 day
  // return 1000 * 60 * 60 * 24;
};

const xTickGenerator = (
  data: PriceWithTimeNum[],
  timeRange: string,
  fake: boolean
): number[] => {
  let count: number = 7;
  let endCount: number = -1;
  let units: string = "days";
  let interval: number = 0;

  if (timeRange === "1d") {
    count = 24;
    endCount = -1;
    interval = 3;
    units = "hours";
  } else if (timeRange === "30d") {
    count = 30;
    endCount = -1;
    interval = 3;
    units = "days";
  } else if (timeRange === "1y") {
    count = 13;
    endCount = -1;
    interval = 0;
    units = "months";
  }

  const ticks: Set<number> = new Set();
  for (let i = 0; i <= count; i++) {
    const date = Number(
      moment()
        .startOf(units as moment.DurationInputArg2)
        .subtract(i, units as moment.DurationInputArg2)
        .format("x")
    );
    if (!interval || i % interval === 0) {
      ticks.add(date);
    }
  }
  return [...ticks];
};
interface TickProps {
  x?: number;
  y?: number;
  payload?: {
    coordinate?: number;
    offset?: number;
    value: number;
  };
  timeRange: string;
}

const CustomTick = ({ x, y, payload, timeRange }: TickProps) => {
  if (payload != null) {
    return (
      <g
        className="text-xs fill-[color:hsl(var(--chart-axis-primary))]"
        transform={`translate(${x},${y})`}
      >
        <text
          className="text-xs fill-[color:hsl(var(--chart-axis-primary))] -rotate-90 translate-y-5 -translate-x-1.5 md:rotate-0 md:translate-y-0 md:translate-x-0"
          x={0}
          y={0}
          dy={10}
          textAnchor="middle"
        >
          {dateFormatter(payload.value)}
        </text>
        {timeRange === "1d" ? (
          <text
            x={0}
            y={0}
            dy={22}
            textAnchor="middle"
            className="-rotate-90 md:rotate-0 translate-y-5 -translate-x-1.5 md:translate-y-0 md:translate-x-0"
          >
            {hoursOnlyFormatter(payload.value)}
          </text>
        ) : null}
      </g>
    );
  }
  return null;
};

const formattedName = (
  value: string,
  includePrice: boolean = true
) => {
  let formattedName = "";
  if (value === "highestSellPrice") {
    formattedName = "High";
  } else if (value === "lowesSellPrice") {
    formattedName = "Low";
  } else {
    formattedName = "Average";
  }
  if (includePrice) {
    formattedName = formattedName + " Price";
  }
  return formattedName;
};

const tooltipFormatter = (value: string) => {
  return moment(value).format("MMMM D, YYYY HH:mm");
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-sm bg-[hsl(var(--combobox-button-primary))] p-2 rounded-lg border border-[color:hsl(var(--combobox-button-primary))]">
        <p className="text-base font-bold">
          {tooltipFormatter(label)}
        </p>

        {payload.map((line: Payload<ValueType, NameType>) => {
          if (line.name != null && line.value != null) {
            return (
              <p
                className="text-sm"
                key={line.dataKey}
                // text-sm
                // For some reason the commented text must stay in order to modify the text color?
                // Maybe because there are hidden css cache updates when trying to verify the
                // utility class variables?
                // className={`text-[color:${line.color}]`}
                // text-[color:hsl(var(--chart-price-hi))]
                // text-[color:hsl(var(--chart-price-avg))]
                // text-[color:hsl(var(--chart-price-lo))]
              >
                {formattedName(line.name.toString())}:{" "}
                {numberWithCommas(line.value.toString(), 0)}
              </p>
            );
          }
          return <></>;
        })}
      </div>
    );
  }

  return null;
};

interface CustomLegendProps {
  payload: Props[];
}

const customLegend = (props: Props) => {
  return (
    <ul className="text-[12px] sm:text-sm flex flex-row gap-2 justify-end">
      {props.payload?.map((value, index) => {
        return (
          <li
            key={`${value}-${index}`}
            className="flex flex-row items-center"
            style={{
              color: value.color,
            }}
          >
            <GitCommitHorizontal className="flex-grow-0 flex-shrink-0" />
            <span>
              {value.dataKey?.toString()
                ? formattedName(value.dataKey?.toString(), false)
                : ""}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const getInterval = (value: string) => {
  if (value === "1d") {
    return 2;
  } else if (value === "7d") {
    return 0;
  }

  return 0;
};

export default function PriceChart({
  data,
  xkey,
  ykey,
  timeRange = "7d",
  fakeData = false,
  children,
}: {
  data: any[];
  xkey: string;
  ykey?: string;
  timeRange?: string;
  fakeData?: boolean;
  children?: React.ReactNode;
}) {
  const { isMobile } = useSidebar();

  const marginLeft = isMobile ? 22 : 40;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        accessibilityLayer
        width={800}
        height={400}
        data={data}
        margin={{
          bottom: 40,
          left: marginLeft,
          right: 45,
          top: 15,
        }}
      >
        <CartesianGrid strokeWidth={0.2} />
        {fakeData ? null : (
          <Tooltip
            formatter={(value, name, props) => {
              return [value, formattedName(name.toString())];
            }}
            content={<CustomTooltip />}
          />
        )}
        <Legend
          verticalAlign="top"
          align="right"
          height={35}
          formatter={(value, entry, index) => formattedName(value)}
          content={customLegend}
          style={{
            minWidth: "300px",
          }}
        />
        <XAxis
          dataKey={xkey}
          tickFormatter={timeFormatter}
          tick={<CustomTick timeRange={timeRange} />}
          strokeWidth={1}
          type="number"
          domain={([dataMin, dataMax]) => {
            const loBound = dataMin - xAxisBounds(timeRange);
            const upBound = dataMax + xAxisBounds(timeRange);
            return [loBound, upBound];
          }}
          scale="time"
          interval={0}
          ticks={[...xTickGenerator(data, timeRange, fakeData)]}
          style={{
            fill: "hsl(var(--chart-axis-primary))",
          }}
          axisLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
          tickLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
          dy={4}
        >
          {!isMobile && (
            <Label
              value="Date"
              position="bottom"
              offset={25}
              style={{
                fill: "hsl(var(--foreground))",
                // transform: "translate(0, 15px)",
              }}
            />
          )}
        </XAxis>
        <YAxis
          dataKey={ykey}
          tickFormatter={numberWithCommas}
          type="number"
          scale="linear"
          domain={([dataMin, dataMax]) => {
            const getMultiplier = (value: number, lower: boolean) => {
              let multi = 10;

              if (value > 1000000) {
                // million rounds to ceiling hundred thousand
                multi = 100000;
              } else if (value > 1000) {
                // thousands rounds to ceiling hundred
                multi = 100;
              }

              return multi;
            };
            const lowerMultiplier = getMultiplier(dataMin, true);
            const upperMultiplier = getMultiplier(dataMax, false);

            const loStart =
              dataMin % lowerMultiplier === 0
                ? dataMin - lowerMultiplier
                : dataMin;
            const hiStart =
              dataMax % upperMultiplier === 0
                ? dataMax + upperMultiplier
                : dataMax;

            const loBound =
              Math.floor(loStart / lowerMultiplier) * lowerMultiplier;
            const upBound =
              Math.ceil(hiStart / upperMultiplier) * upperMultiplier;

            return [Math.max(loBound, 0), upBound];
          }}
          tick={{ fontSize: "0.75rem" }}
          interval={0}
          style={{
            fill: "hsl(var(--chart-axis-primary))",
          }}
          axisLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
          tickLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
        >
          {!isMobile && (
            <Label
              value="Price"
              position="left"
              offset={33}
              style={{
                fill: "hsl(var(--foreground))",
              }}
              angle={-90}
            />
          )}
        </YAxis>
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
}
