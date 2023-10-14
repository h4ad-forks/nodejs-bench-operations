## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|705,586,045|87|
|Getter|54,885,029|86|
|Method|694,151,512|91|
|DefineProperty (getter)|698,374,437|89|
|DefineProperty (getter & enumerable=false)|52,378,220|90|
|DefineProperty (getter & configurable=false)|717,041,491|92|
|DefineProperty (getter & enumerable=false & configurable=false)|54,981,962|92|
|DefineProperty (writable)|713,571,840|92|
|DefineProperty (writable & enumerable=false)|407,531,869|55|
|DefineProperty (writable & enumerable=false & configurable=false)|81,245,045|82|
|DefineProperties (getter)|33,154,177|83|
|DefineProperties (getter & enumerable=false)|33,906,809|85|
|DefineProperties (getter & enumerable=false & configurable=false)|54,965,666|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:35:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Getter (class)","hz":705586045.1792839,"cycles":7,"stats":{"deviation":1.0040427861989643e-10,"mean":1.4172615896136493e-9,"moe":2.1098358389308522e-11,"rme":1.4886707255687364,"sem":1.0764468565973736e-11,"variance":1.0081019165181791e-20}},{"name":"Getter","hz":54885028.612257324,"cycles":5,"stats":{"deviation":9.634285558170964e-10,"mean":1.821990486813143e-8,"moe":2.0362277899599668e-10,"rme":1.1175842051302627,"sem":1.0388917295714116e-10,"variance":9.281945821638159e-19}},{"name":"Method","hz":694151511.9051033,"cycles":7,"stats":{"deviation":8.894406422855472e-11,"mean":1.4406076812474174e-9,"moe":1.8274787914054002e-11,"rme":1.2685471660285697,"sem":9.32387138472143e-12,"variance":7.911046561493267e-21}},{"name":"DefineProperty (getter)","hz":698374437.0876744,"cycles":8,"stats":{"deviation":7.589206348951169e-11,"mean":1.4318966257845135e-9,"moe":1.576730357600533e-11,"rme":1.10114817592832,"sem":8.044542640819047e-12,"variance":5.759605300696073e-21}},{"name":"DefineProperty (getter & enumerable=false)","hz":52378219.60269992,"cycles":6,"stats":{"deviation":9.373018080118566e-10,"mean":1.9091905138914905e-8,"moe":1.936485597963399e-10,"rme":1.0142966790759258,"sem":9.88002856103775e-11,"variance":8.78534679302295e-19}},{"name":"DefineProperty (getter & configurable=false)","hz":717041490.9028913,"cycles":6,"stats":{"deviation":5.069221427699292e-11,"mean":1.3946194365137926e-9,"moe":1.0358656210078401e-11,"rme":0.742758629262511,"sem":5.285028678611429e-12,"variance":2.569700588304565e-21}},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","hz":54981962.227602236,"cycles":6,"stats":{"deviation":8.00539359762416e-10,"mean":1.818778303801563e-8,"moe":1.6358551561987623e-10,"rme":0.899425264079487,"sem":8.346199776524298e-11,"variance":6.408632665288189e-19}},{"name":"DefineProperty (writable)","hz":713571840.4756671,"cycles":7,"stats":{"deviation":7.937067980386411e-11,"mean":1.4014005924524709e-9,"moe":1.6218932176762135e-11,"rme":1.1573373283922175,"sem":8.274965396307212e-12,"variance":6.299704812527523e-21}},{"name":"DefineProperty (writable & enumerable=false)","hz":407531869.46778953,"cycles":7,"stats":{"deviation":3.3669413543929205e-9,"mean":2.45379582535701e-9,"moe":8.898366280369755e-10,"rme":36.26367845448227,"sem":4.539982796107018e-10,"variance":1.1336294083921234e-17}},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","hz":81245045.32419689,"cycles":5,"stats":{"deviation":2.004105634084562e-9,"mean":1.2308442884235477e-8,"moe":4.33780229430826e-10,"rme":3.524249440084798,"sem":2.2131644358715613e-10,"variance":4.0164393925694834e-18}},{"name":"DefineProperties (getter)","hz":33154177.16929698,"cycles":5,"stats":{"deviation":2.5832535045456863e-9,"mean":3.016211184773628e-8,"moe":5.557558622127736e-10,"rme":1.8425628318677694,"sem":2.8354890929223146e-10,"variance":6.6731986687475705e-18}},{"name":"DefineProperties (getter & enumerable=false)","hz":33906808.977688454,"cycles":6,"stats":{"deviation":2.4134893737455524e-9,"mean":2.9492601343229486e-8,"moe":5.130881676913428e-10,"rme":1.739718249062254,"sem":2.6177967739354223e-10,"variance":5.824930957182698e-18}},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","hz":54965665.8025049,"cycles":6,"stats":{"deviation":9.204887289275868e-10,"mean":1.8193175419598538e-8,"moe":1.891271378740114e-10,"rme":1.0395499054567177,"sem":9.649343769082215e-11,"variance":8.472995000827243e-19}}]}-->
