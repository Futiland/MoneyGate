import {
  getRetailSales,
  getpriceIndex,
  getPersonalIncome,
  getNewHomeSales,
  getManufacturingPmi,
  getIsmManufacturingPmi,
  getExistingHomeSales,
  getCbConsumer,
  getAllCarSales,
} from "../_api/paths/inflation";
import {
  getAverageHourlyEarning,
  getEmploymentCostIndex,
  getCpi,
  getCoreCpi,
  getCorePpi,
} from "../_api/paths/leading";

import dynamic from "next/dynamic";
import Table from "./Table";
import Tabs from "./Tabs";
import Period from "./Period";
import { PeriodProvider } from "./PeriodContext";

export default async function Main() {
  // leading
  const averageHourEarning = await getAverageHourlyEarning();
  const employmentCostIndex = await getEmploymentCostIndex();
  const cpi = await getCpi();
  const coreCpi = await getCoreCpi();
  const corePpi = await getCorePpi();

  // infalation
  const retailSalesData = await getRetailSales();
  const priceIndexData = await getpriceIndex();
  const manufacturingPmiData = await getManufacturingPmi();
  const ismManufacuringPmiData = await getIsmManufacturingPmi();
  const personalIncomeData = await getPersonalIncome();
  const newHomeSalesData = await getNewHomeSales();
  const existingHomeSalesData = await getExistingHomeSales();
  const cbConsumerData = await getCbConsumer();
  const allCarSalesData = await getAllCarSales();

  return (
    <PeriodProvider>
      <div className="grid gap-4">
        <Period />
        <Tabs>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-20">
            <Table title="고용비용지수" attr={employmentCostIndex.attr} />
            <Table title="소비자물가지수" attr={cpi.attr} />
            <Table title="핵심 소비자물가지수" attr={coreCpi.attr} />
            <Table title="생산자물가지수" attr={corePpi.attr} />
            <Table
              title="미국 평균 시간당 수입"
              attr={averageHourEarning.attr}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-20">
            <Table title="소매 판매 지수" attr={retailSalesData.attr} />
            <Table title="개인 소비 지출 물가지수" attr={priceIndexData.attr} />
            <Table title="미국 제조업 PMI" attr={manufacturingPmiData.attr} />
            <Table
              title="미국 ISM 제조업 PMI"
              attr={ismManufacuringPmiData.attr}
            />
            <Table title="미국 신규 주택 판매" attr={newHomeSalesData.attr} />
            <Table
              title="미국 기존 주택 판매"
              attr={existingHomeSalesData.attr}
            />
            <Table title="개인 소득" attr={personalIncomeData.attr} />
            <Table title="소비자 신뢰 지수" attr={cbConsumerData.attr} />
            <Table title="미국 모든 자동차 판매" attr={allCarSalesData.attr} />
          </div>
        </Tabs>
      </div>
    </PeriodProvider>
  );
}
