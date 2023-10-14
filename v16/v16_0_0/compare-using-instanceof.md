## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|294,787|89|
|[True conditional] Using constructor name|284,816|81|
|[True conditional] Check if property is valid then instanceof |290,857|86|
|[False conditional] Using instanceof only|596,564,990|97|
|[False conditional] Using constructor name|596,769,842|90|
|[False conditional] Check if property is valid then instanceof |597,359,644|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:06:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":294786.864098204,"cycles":4,"stats":{"deviation":6.015161760340246e-8,"mean":0.0000033922814134176088,"moe":1.249707507915773e-8,"rme":0.3683973572984722,"sem":6.376058713855985e-9,"variance":3.618217100305956e-15}},{"name":"[True conditional] Using constructor name","hz":284816.04997453623,"cycles":3,"stats":{"deviation":3.300434244374919e-7,"mean":0.000003511038089635062,"moe":7.18761235441649e-8,"rme":2.047147359533081,"sem":3.667149160416577e-8,"variance":1.0892866201442646e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":290856.9998928671,"cycles":3,"stats":{"deviation":3.028264600819552e-7,"mean":0.0000034381156388477334,"moe":6.400304930043443e-8,"rme":1.861573490351963,"sem":3.265461699001757e-8,"variance":9.170386492576801e-14}},{"name":"[False conditional] Using instanceof only","hz":596564990.4541457,"cycles":9,"stats":{"deviation":9.954304721602076e-12,"mean":1.6762633007323013e-9,"moe":1.9809847646274284e-12,"rme":0.11817861571997697,"sem":1.0107065125650145e-12,"variance":9.908818249050937e-23}},{"name":"[False conditional] Using constructor name","hz":596769842.0442057,"cycles":8,"stats":{"deviation":1.5338654015851137e-11,"mean":1.6756878943053644e-9,"moe":3.168998751516699e-12,"rme":0.18911628843809056,"sem":1.6168360977126016e-12,"variance":2.3527430701798624e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":597359644.1501887,"cycles":9,"stats":{"deviation":7.93063844087162e-12,"mean":1.6740334064960358e-9,"moe":1.5782592922880517e-12,"rme":0.09427884092179192,"sem":8.052343328000264e-13,"variance":6.289502607983064e-23}}]}-->
