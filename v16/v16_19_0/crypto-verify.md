## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|22,331|89|
|crypto.verify('RSA-SHA256')|21,565|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 20:39:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696970335575,\"currentTarget\":{\"0\":{\"name\":\"crypto.createVerify('RSA-SHA256')\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":4.963765944049178e-7,\"rme\":1.1084431971582205,\"sem\":2.53253364492305e-7,\"deviation\":0.0000023891874622502592,\"mean\":0.00004478141917217833,\"sample\":[0.00005445152067868505,0.00005440407135969141,0.000048721527168732126,0.00005150906005719733,0.000045994323734729495,0.00004480810122164049,0.00004377048516579407,0.00004370381762652705,0.00004367870531822145,0.00004362752746294682,0.000043697624237140364,0.00004483787891986062,0.00004370459581881533,0.000043758079268292685,0.00004504423954703833,0.000043556461270670146,0.00004491487032201915,0.000043804414782608694,0.00004472633478260869,0.00004360361871750433,0.00004470579376083189,0.00004345153812824957,0.00004335959618717504,0.000044738116117850955,0.00004343204072790295,0.00004354928596187175,0.000044597474003466205,0.000043315880726015556,0.00004661028867761452,0.00004356748228176318,0.000043644838375108036,0.0000447167562662057,0.00004336938202247191,0.00004341622817631806,0.00004346730855661193,0.00004345235609334486,0.00004468927139152982,0.000043470420051858255,0.00004350049870354365,0.000044482614520311155,0.000043338785652549695,0.000043365233362143475,0.00004463386862575626,0.00004372340363007779,0.000043433341400172864,0.0000532215738980121,0.000043414067415730335,0.000043430662057044084,0.00004446947709593777,0.00004359021348314607,0.00004352720570440795,0.00004349394554883319,0.000048095580812445976,0.000045757615384615386,0.00004659153500432152,0.00004377014174589455,0.0000437595099394987,0.00004488523249783924,0.00004377420484010372,0.000043680941227312014,0.00004475592653414002,0.00004366987726879861,0.000043766943820224714,0.000044802687986171134,0.00004386772601555748,0.00004365915989628349,0.00004538758945548833,0.00004362207951598963,0.000043735222126188415,0.00004508601987899741,0.00004596765082108902,0.000048098519446845285,0.000045237712186689716,0.000043935145203111496,0.000044358501296456356,0.0000445743275713051,0.0000445432117545376,0.00004627898789974071,0.00004377091961970613,0.00004365371477960242,0.00004363314261019879,0.0000438041970613656,0.00004378907087294727,0.00005341302765773552,0.000043677829732065684,0.000043753027657735524,0.00004367238461538461,0.00004352898962834918,0.00004369174589455489],\"variance\":5.708216729773835e-12},\"times\":{\"cycle\":0.051812101982210326,\"elapsed\":5.502,\"period\":0.00004478141917217833,\"timeStamp\":1696970330073},\"running\":false,\"count\":1157,\"cycles\":4,\"hz\":22330.69023907302},\"1\":{\"name\":\"crypto.verify('RSA-SHA256')\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":0.0000011937680656007787,\"rme\":2.574379977467693,\"sem\":6.09065339592234e-7,\"deviation\":0.000005810113036613564,\"mean\":0.000046371090361533855,\"sample\":[0.00004754615399061033,0.000046895619493908155,0.000046623443202979515,0.000046862271880819364,0.00004688489757914339,0.000048128762569832405,0.00006851429702048418,0.00004442611071744907,0.000044340724534986714,0.000044256921308576485,0.00004447708222811671,0.00004441271352785146,0.0000442670893015031,0.000044466030061892135,0.00006656787621573829,0.000044297239610963754,0.0000442722175066313,0.00004430864544650752,0.000044481414677276746,0.000044243570291777184,0.00004435550751547303,0.000044622793987621575,0.00004453402298850575,0.000044275135278514585,0.000044251173297966404,0.00004438857559681698,0.00004442252785145889,0.00004438707250221043,0.00004424763748894783,0.000044427656056587094,0.00006568696728558798,0.000044515985853227236,0.00004436974270557029,0.000044333932802829354,0.0000446114774535809,0.00004431032537577365,0.00004433906189213086,0.000044243304155614496,0.00004436196198054818,0.00004446877099911583,0.00006475486472148541,0.000044310679929266136,0.000044389194518125556,0.000044633228116710876,0.00004434976038903625,0.00004443243059239611,0.00004441793015030946,0.000044414216622458,0.00004435736427939876,0.000044337912466843504,0.000047030593280282935,0.000044301837312113174,0.000044217309460654287,0.000044340352473498236,0.00004428151766784452,0.00004423187102473498,0.0000441724187279152,0.00004443275530035335,0.00004443514045936396,0.00006648557243816254,0.00004439503533568905,0.00004449618374558304,0.00004453434717314488,0.00004433284363957597,0.000044511378091872794,0.000044682315371024736,0.00004459326943462898,0.000044556342756183745,0.00006514766519434628,0.00004454008922261484,0.000044474717314487636,0.00004434158922261484,0.000044458992932862186,0.00004438072349823322,0.000044265175795053004,0.00004431137632508834,0.00004431498587819947,0.00006391839982347749,0.00004416308737864077,0.00004445602824360106,0.000054243392762577225,0.000044409778464254194,0.00004426388172992056,0.000044560089143865846,0.00004454985083848191,0.00004445867696381289,0.00004436882524271845,0.00004438780141218005,0.00004463228684907326,0.00004459001059135039,0.00004467641835834069],\"variance\":3.375741349822689e-11},\"times\":{\"cycle\":0.05253844537961786,\"elapsed\":5.493,\"period\":0.000046371090361533855,\"timeStamp\":1696970335591},\"running\":false,\"count\":1133,\"cycles\":4,\"hz\":21565.16036615625},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"crypto.createVerify('RSA-SHA256')\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":4.963765944049178e-7,\"rme\":1.1084431971582205,\"sem\":2.53253364492305e-7,\"deviation\":0.0000023891874622502592,\"mean\":0.00004478141917217833,\"sample\":[0.00005445152067868505,0.00005440407135969141,0.000048721527168732126,0.00005150906005719733,0.000045994323734729495,0.00004480810122164049,0.00004377048516579407,0.00004370381762652705,0.00004367870531822145,0.00004362752746294682,0.000043697624237140364,0.00004483787891986062,0.00004370459581881533,0.000043758079268292685,0.00004504423954703833,0.000043556461270670146,0.00004491487032201915,0.000043804414782608694,0.00004472633478260869,0.00004360361871750433,0.00004470579376083189,0.00004345153812824957,0.00004335959618717504,0.000044738116117850955,0.00004343204072790295,0.00004354928596187175,0.000044597474003466205,0.000043315880726015556,0.00004661028867761452,0.00004356748228176318,0.000043644838375108036,0.0000447167562662057,0.00004336938202247191,0.00004341622817631806,0.00004346730855661193,0.00004345235609334486,0.00004468927139152982,0.000043470420051858255,0.00004350049870354365,0.000044482614520311155,0.000043338785652549695,0.000043365233362143475,0.00004463386862575626,0.00004372340363007779,0.000043433341400172864,0.0000532215738980121,0.000043414067415730335,0.000043430662057044084,0.00004446947709593777,0.00004359021348314607,0.00004352720570440795,0.00004349394554883319,0.000048095580812445976,0.000045757615384615386,0.00004659153500432152,0.00004377014174589455,0.0000437595099394987,0.00004488523249783924,0.00004377420484010372,0.000043680941227312014,0.00004475592653414002,0.00004366987726879861,0.000043766943820224714,0.000044802687986171134,0.00004386772601555748,0.00004365915989628349,0.00004538758945548833,0.00004362207951598963,0.000043735222126188415,0.00004508601987899741,0.00004596765082108902,0.000048098519446845285,0.000045237712186689716,0.000043935145203111496,0.000044358501296456356,0.0000445743275713051,0.0000445432117545376,0.00004627898789974071,0.00004377091961970613,0.00004365371477960242,0.00004363314261019879,0.0000438041970613656,0.00004378907087294727,0.00005341302765773552,0.000043677829732065684,0.000043753027657735524,0.00004367238461538461,0.00004352898962834918,0.00004369174589455489],\"variance\":5.708216729773835e-12},\"times\":{\"cycle\":0.051812101982210326,\"elapsed\":5.502,\"period\":0.00004478141917217833,\"timeStamp\":1696970330073},\"running\":false,\"count\":1157,\"cycles\":4,\"hz\":22330.69023907302},\"aborted\":false},{\"timeStamp\":1696970341084,\"currentTarget\":{\"0\":{\"name\":\"crypto.createVerify('RSA-SHA256')\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":4.963765944049178e-7,\"rme\":1.1084431971582205,\"sem\":2.53253364492305e-7,\"deviation\":0.0000023891874622502592,\"mean\":0.00004478141917217833,\"sample\":[0.00005445152067868505,0.00005440407135969141,0.000048721527168732126,0.00005150906005719733,0.000045994323734729495,0.00004480810122164049,0.00004377048516579407,0.00004370381762652705,0.00004367870531822145,0.00004362752746294682,0.000043697624237140364,0.00004483787891986062,0.00004370459581881533,0.000043758079268292685,0.00004504423954703833,0.000043556461270670146,0.00004491487032201915,0.000043804414782608694,0.00004472633478260869,0.00004360361871750433,0.00004470579376083189,0.00004345153812824957,0.00004335959618717504,0.000044738116117850955,0.00004343204072790295,0.00004354928596187175,0.000044597474003466205,0.000043315880726015556,0.00004661028867761452,0.00004356748228176318,0.000043644838375108036,0.0000447167562662057,0.00004336938202247191,0.00004341622817631806,0.00004346730855661193,0.00004345235609334486,0.00004468927139152982,0.000043470420051858255,0.00004350049870354365,0.000044482614520311155,0.000043338785652549695,0.000043365233362143475,0.00004463386862575626,0.00004372340363007779,0.000043433341400172864,0.0000532215738980121,0.000043414067415730335,0.000043430662057044084,0.00004446947709593777,0.00004359021348314607,0.00004352720570440795,0.00004349394554883319,0.000048095580812445976,0.000045757615384615386,0.00004659153500432152,0.00004377014174589455,0.0000437595099394987,0.00004488523249783924,0.00004377420484010372,0.000043680941227312014,0.00004475592653414002,0.00004366987726879861,0.000043766943820224714,0.000044802687986171134,0.00004386772601555748,0.00004365915989628349,0.00004538758945548833,0.00004362207951598963,0.000043735222126188415,0.00004508601987899741,0.00004596765082108902,0.000048098519446845285,0.000045237712186689716,0.000043935145203111496,0.000044358501296456356,0.0000445743275713051,0.0000445432117545376,0.00004627898789974071,0.00004377091961970613,0.00004365371477960242,0.00004363314261019879,0.0000438041970613656,0.00004378907087294727,0.00005341302765773552,0.000043677829732065684,0.000043753027657735524,0.00004367238461538461,0.00004352898962834918,0.00004369174589455489],\"variance\":5.708216729773835e-12},\"times\":{\"cycle\":0.051812101982210326,\"elapsed\":5.502,\"period\":0.00004478141917217833,\"timeStamp\":1696970330073},\"running\":false,\"count\":1157,\"cycles\":4,\"hz\":22330.69023907302},\"1\":{\"name\":\"crypto.verify('RSA-SHA256')\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":0.0000011937680656007787,\"rme\":2.574379977467693,\"sem\":6.09065339592234e-7,\"deviation\":0.000005810113036613564,\"mean\":0.000046371090361533855,\"sample\":[0.00004754615399061033,0.000046895619493908155,0.000046623443202979515,0.000046862271880819364,0.00004688489757914339,0.000048128762569832405,0.00006851429702048418,0.00004442611071744907,0.000044340724534986714,0.000044256921308576485,0.00004447708222811671,0.00004441271352785146,0.0000442670893015031,0.000044466030061892135,0.00006656787621573829,0.000044297239610963754,0.0000442722175066313,0.00004430864544650752,0.000044481414677276746,0.000044243570291777184,0.00004435550751547303,0.000044622793987621575,0.00004453402298850575,0.000044275135278514585,0.000044251173297966404,0.00004438857559681698,0.00004442252785145889,0.00004438707250221043,0.00004424763748894783,0.000044427656056587094,0.00006568696728558798,0.000044515985853227236,0.00004436974270557029,0.000044333932802829354,0.0000446114774535809,0.00004431032537577365,0.00004433906189213086,0.000044243304155614496,0.00004436196198054818,0.00004446877099911583,0.00006475486472148541,0.000044310679929266136,0.000044389194518125556,0.000044633228116710876,0.00004434976038903625,0.00004443243059239611,0.00004441793015030946,0.000044414216622458,0.00004435736427939876,0.000044337912466843504,0.000047030593280282935,0.000044301837312113174,0.000044217309460654287,0.000044340352473498236,0.00004428151766784452,0.00004423187102473498,0.0000441724187279152,0.00004443275530035335,0.00004443514045936396,0.00006648557243816254,0.00004439503533568905,0.00004449618374558304,0.00004453434717314488,0.00004433284363957597,0.000044511378091872794,0.000044682315371024736,0.00004459326943462898,0.000044556342756183745,0.00006514766519434628,0.00004454008922261484,0.000044474717314487636,0.00004434158922261484,0.000044458992932862186,0.00004438072349823322,0.000044265175795053004,0.00004431137632508834,0.00004431498587819947,0.00006391839982347749,0.00004416308737864077,0.00004445602824360106,0.000054243392762577225,0.000044409778464254194,0.00004426388172992056,0.000044560089143865846,0.00004454985083848191,0.00004445867696381289,0.00004436882524271845,0.00004438780141218005,0.00004463228684907326,0.00004459001059135039,0.00004467641835834069],\"variance\":3.375741349822689e-11},\"times\":{\"cycle\":0.05253844537961786,\"elapsed\":5.493,\"period\":0.000046371090361533855,\"timeStamp\":1696970335591},\"running\":false,\"count\":1133,\"cycles\":4,\"hz\":21565.16036615625},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"crypto.verify('RSA-SHA256')\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":0.0000011937680656007787,\"rme\":2.574379977467693,\"sem\":6.09065339592234e-7,\"deviation\":0.000005810113036613564,\"mean\":0.000046371090361533855,\"sample\":[0.00004754615399061033,0.000046895619493908155,0.000046623443202979515,0.000046862271880819364,0.00004688489757914339,0.000048128762569832405,0.00006851429702048418,0.00004442611071744907,0.000044340724534986714,0.000044256921308576485,0.00004447708222811671,0.00004441271352785146,0.0000442670893015031,0.000044466030061892135,0.00006656787621573829,0.000044297239610963754,0.0000442722175066313,0.00004430864544650752,0.000044481414677276746,0.000044243570291777184,0.00004435550751547303,0.000044622793987621575,0.00004453402298850575,0.000044275135278514585,0.000044251173297966404,0.00004438857559681698,0.00004442252785145889,0.00004438707250221043,0.00004424763748894783,0.000044427656056587094,0.00006568696728558798,0.000044515985853227236,0.00004436974270557029,0.000044333932802829354,0.0000446114774535809,0.00004431032537577365,0.00004433906189213086,0.000044243304155614496,0.00004436196198054818,0.00004446877099911583,0.00006475486472148541,0.000044310679929266136,0.000044389194518125556,0.000044633228116710876,0.00004434976038903625,0.00004443243059239611,0.00004441793015030946,0.000044414216622458,0.00004435736427939876,0.000044337912466843504,0.000047030593280282935,0.000044301837312113174,0.000044217309460654287,0.000044340352473498236,0.00004428151766784452,0.00004423187102473498,0.0000441724187279152,0.00004443275530035335,0.00004443514045936396,0.00006648557243816254,0.00004439503533568905,0.00004449618374558304,0.00004453434717314488,0.00004433284363957597,0.000044511378091872794,0.000044682315371024736,0.00004459326943462898,0.000044556342756183745,0.00006514766519434628,0.00004454008922261484,0.000044474717314487636,0.00004434158922261484,0.000044458992932862186,0.00004438072349823322,0.000044265175795053004,0.00004431137632508834,0.00004431498587819947,0.00006391839982347749,0.00004416308737864077,0.00004445602824360106,0.000054243392762577225,0.000044409778464254194,0.00004426388172992056,0.000044560089143865846,0.00004454985083848191,0.00004445867696381289,0.00004436882524271845,0.00004438780141218005,0.00004463228684907326,0.00004459001059135039,0.00004467641835834069],\"variance\":3.375741349822689e-11},\"times\":{\"cycle\":0.05253844537961786,\"elapsed\":5.493,\"period\":0.000046371090361533855,\"timeStamp\":1696970335591},\"running\":false,\"count\":1133,\"cycles\":4,\"hz\":21565.16036615625},\"aborted\":false}]"}-->
