## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|596,951,559|90|
|Using optional chain (obj.field?.field2) (undefined)|587,646,548|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|599,266,641|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,656,360|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:25:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":596951559.4014133,"cycles":6,"stats":{"deviation":3.939097638106267e-11,"mean":1.6751778000257494e-9,"moe":8.138260035307577e-12,"rme":0.4858147018891059,"sem":4.152173487401825e-12,"variance":1.551649020253437e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":587646548.2842252,"cycles":7,"stats":{"deviation":1.436371155230032e-10,"mean":1.7017031801169246e-9,"moe":2.935140080052483e-11,"rme":1.7248249367735262,"sem":1.4975204490063687e-11,"variance":2.0631620955768565e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":599266641.3105947,"cycles":8,"stats":{"deviation":3.278931742668586e-11,"mean":1.668706267068366e-9,"moe":6.7003044043456965e-12,"rme":0.40152689161508304,"sem":3.4185226552784166e-12,"variance":1.075139337307965e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":597656359.6150204,"cycles":6,"stats":{"deviation":3.108039828944518e-11,"mean":1.6732023075001642e-9,"moe":6.421276813083403e-12,"rme":0.3837716924187766,"sem":3.276161639328267e-12,"variance":9.659911578305468e-22}}]}-->
