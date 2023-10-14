## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,009|92|
|crypto.verify('RSA-SHA256')|20,334|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:08:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":21008.505786771944,"cycles":4,"stats":{"deviation":0.0000015342443020665993,"mean":0.00004759976792969505,"moe":3.1351381063250614e-7,"rme":0.6586456704905927,"sem":1.599560258329113e-7,"variance":2.3539055784238265e-12}},{"name":"crypto.verify('RSA-SHA256')","hz":20333.871580035524,"cycles":3,"stats":{"deviation":0.000004107662297485664,"mean":0.00004917902604351222,"moe":8.348516866285742e-7,"rme":1.6975766984281486,"sem":4.2594473807580315e-7,"variance":1.68728895501852e-11}}]}-->
