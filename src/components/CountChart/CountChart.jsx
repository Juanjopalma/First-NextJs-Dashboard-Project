"use client";
import Image from "next/image";
import './countChart.scss';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
    return (
        <div className="countChart">
            {/* TITLE */}
            <div className="countChart__title">
                <h1>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="countChart__chart">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} />
            </div>

            {/* BOTTOM */}
            <div className="countChart__bottom">
                <div className="countChart__bottom-div1">
                    <div className="countChart__bottom-subDiv1" />
                    <h1>1,234</h1>
                    <h2>Boys (55%)</h2>
                </div>
                <div className="countChart__bottom-div2">
                    <div className="countChart__bottom-subDiv2" />
                    <h1>1,234</h1>
                    <h2>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart;