## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,478,896|88|
|Object.create({})|1,158,095|81|
|Cached Empty.prototype|745,135,751|92|
|Empty.prototype|1,338,630|63|
|Empty class|886,843|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:23:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":44478895.55139128,"cycles":5,"stats":{"deviation":9.219347662161694e-10,"mean":2.2482572635927792e-8,"moe":1.9262600953862096e-10,"rme":0.8567792158749622,"sem":9.827857629521478e-11,"variance":8.499637131580629e-19}},{"name":"Object.create({})","hz":1158095.1743207844,"cycles":3,"stats":{"deviation":1.3264339529725823e-7,"mean":8.63486889656106e-7,"moe":2.8886783864736236e-8,"rme":3.345364499539854,"sem":1.4738155033028692e-8,"variance":1.759427031598471e-14}},{"name":"Cached Empty.prototype","hz":745135751.3311709,"cycles":6,"stats":{"deviation":5.813580248826728e-11,"mean":1.34203733777841e-9,"moe":1.1879709735747304e-11,"rme":0.8851996439542295,"sem":6.061076395789441e-12,"variance":3.379771530954824e-21}},{"name":"Empty.prototype","hz":1338629.5110590984,"cycles":3,"stats":{"deviation":5.102502988533188e-8,"mean":7.470326865936333e-7,"moe":1.2599957040181162e-8,"rme":1.6866674332063354,"sem":6.428549510296511e-9,"variance":2.6035536747990113e-15}},{"name":"Empty class","hz":886843.4350697612,"cycles":3,"stats":{"deviation":1.255971344369593e-7,"mean":0.0000011275947483575131,"moe":2.901145791627098e-8,"rme":2.572862099484757,"sem":1.4801764242995397e-8,"variance":1.577464017877563e-14}}]}-->
