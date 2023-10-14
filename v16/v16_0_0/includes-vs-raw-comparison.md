## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,256,484|94|
|using Array.includes (first item)|693,686,085|95|
|Using raw comparison|708,119,961|95|
|Using raw comparison (first item)|707,071,078|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:18:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":707256483.7739236,"cycles":8,"stats":{"deviation":1.3332163956326563e-11,"mean":1.4139142205724234e-9,"moe":2.695211123979538e-12,"rme":0.19062055425741323,"sem":1.3751077163160908e-12,"variance":1.7774659575837315e-22}},{"name":"using Array.includes (first item)","hz":693686085.2408091,"cycles":7,"stats":{"deviation":1.0086108170642508e-10,"mean":1.4415742527873482e-9,"moe":2.028233213414208e-11,"rme":1.4069571577686881,"sem":1.0348128639868408e-11,"variance":1.0172957802990156e-20}},{"name":"Using raw comparison","hz":708119960.6093261,"cycles":6,"stats":{"deviation":1.1959027534926006e-11,"mean":1.4121901028457322e-9,"moe":2.404861859113576e-12,"rme":0.17029306849463763,"sem":1.2269703362824368e-12,"variance":1.4301833958111836e-22}},{"name":"Using raw comparison (first item)","hz":707071078.214041,"cycles":7,"stats":{"deviation":1.2233818497639483e-11,"mean":1.4142849719236925e-9,"moe":2.4601200566157383e-12,"rme":0.17394797409672777,"sem":1.2551632941917033e-12,"variance":1.49666315033186e-22}}]}-->
