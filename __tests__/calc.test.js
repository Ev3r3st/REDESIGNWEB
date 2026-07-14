const { execSync } = require('child_process');
const fs = require('fs');

test('calculation smoke test', ()=>{
  const supportCount=500; const supportTime=15; const adminWeekly=40; const reportMonthly=30; const hourCost=400;
  const supportHours = supportCount * supportTime / 60;
  const supportAuto = supportHours * 0.35;
  const adminMonthly = adminWeekly * 4.33;
  const adminAuto = adminMonthly * 0.30;
  const reportAuto = reportMonthly * 0.40;
  const totalSaved = supportAuto + adminAuto + reportAuto;
  const monthlySavings = totalSaved * hourCost;
  expect(monthlySavings).toBeGreaterThan(0);
});
