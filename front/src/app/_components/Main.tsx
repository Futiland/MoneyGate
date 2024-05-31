import { getData } from "../_api/paths/paths";
import { Line } from "react-chartjs-2";
import dynamic from "next/dynamic";
import Table from "./Table";

// Dynamically import the Chart component to avoid server-side rendering
const Chart = dynamic(() => import("./Chart"), { ssr: false });

export default async function Main() {
  const data = await getData();
  console.log("data", data);

  const chartData = {
    labels: ["2024-01", "2024-02", "2024-03"],
    datasets: [
      {
        label: "Dataset 1",
        data: [5, 6, 7],
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Dataset 2",
        data: [3, 2, 1],
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <Table title="소매판매지수" attr={data.attr} />
        <Table title="소매판매지수" attr={data.attr} />
      </div>
      <Chart chartData={chartData} />
      {data.data.map((item, idx) => {
        return <div key={idx}>{item.value}</div>;
      })}
    </>
  );
}
