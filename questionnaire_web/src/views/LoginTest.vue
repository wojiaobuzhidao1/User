<template>
  <div>
    <el-col :span="18" :offset="3">
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="20">
          <h1>抑郁与压力风险调查</h1>
        </el-col>
      </el-row>

      <el-row type="flex" justify="start" align="middle">
        <el-col :span="20">
          <h4>这是一项致力于缓解工作紧张人群职业压力和抑郁症状的科研项目。参加此项调查没有任何心理和生理上的风险。我们会对您填写的个人信息进行严格保密。 请您按照您的实际情况放心填写。</h4>
        </el-col>
      </el-row>

      <el-row type="flex" justify="end" align="middle">
        <el-col :span="8" :offset="16">
          <h6>如果您有任何问题，欢迎您联系我们。</h6>
          <h6>联系方式：lifangdeng@buaa.edu.cn</h6>
          <h6>联系人：邓丽芳教授</h6>
        </el-col>
      </el-row>

      <el-row type="flex" justify="start" align="middle">
        <el-col :span="20">
          <h4>总分</h4>
          <h4>{{sum}}</h4>
        </el-col>
      </el-row>

      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 4"></el-step>
        <el-step title="步骤 5"></el-step>
        <el-step title="步骤 6"></el-step>
      </el-steps>
    </el-col>

    <div class="part1" v-if="active ===0">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>

        <el-form-item>
          <h4>性别</h4>
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>年龄</h4>
          <el-radio-group v-model="form.age">
            <el-radio label="18-29"></el-radio>
            <el-radio label="30-39"></el-radio>
            <el-radio label="40-49"></el-radio>
            <el-radio label="50-59"></el-radio>
            <el-radio label="60及以上"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>学历</h4>
          <el-radio-group v-model="form.education">
            <el-radio label="高中或中专"></el-radio>
            <el-radio label="大专"></el-radio>
            <el-radio label="本科"></el-radio>
            <el-radio label="硕士"></el-radio>
            <el-radio label="博士"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>职业</h4>
          <el-radio-group v-model="form.job">
            <el-radio label="医护"></el-radio>
            <el-radio label="交通"></el-radio>
            <el-radio label="IT"></el-radio>
            <el-radio label="技术"></el-radio>
            <el-radio label="科研"></el-radio>
            <el-radio label="教师"></el-radio>
            <el-radio label="销售"></el-radio>
            <el-radio label="其他">
              <el-input style="width: 140px" v-model="form.otherjob">其他</el-input>
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>职位</h4>
          <el-radio-group v-model="form.post">
            <el-radio label="高层管理者"></el-radio>
            <el-radio label="中层管理者"></el-radio>
            <el-radio label="一线主管 "></el-radio>
            <el-radio label="普通员工"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>部门</h4>
          <el-input style="width: 180px" v-model="form.department"></el-input>
        </el-form-item>

        <el-form-item>
          <h4>所在行业</h4>
          <el-input style="width: 180px" v-model="form.industy"></el-input>
        </el-form-item>

        <el-form-item>
          <h4>所在单位性质</h4>
          <el-radio-group v-model="form.departmenttype">
            <el-radio label="国企"></el-radio>
            <el-radio label="外企"></el-radio>
            <el-radio label="合资 "></el-radio>
            <el-radio label="民营"></el-radio>
            <el-radio label="事业单位"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>工作年限(月)</h4>
          <el-radio-group v-model="workmonth">
            <el-radio label="＜12"></el-radio>
            <el-radio label="12-24"></el-radio>
            <el-radio label="25-60"></el-radio>
            <el-radio label="＞60"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>平均每天工作时间</h4>
          <el-radio-group v-model="form.worktime">
            <el-radio label="≤8小时 "></el-radio>
            <el-radio label="9-10小时"></el-radio>
            <el-radio label="＞10小时"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>经济收入(元)</h4>
          <el-radio-group v-model="form.worktime">
            <el-radio label="＜3500"></el-radio>
            <el-radio label="3500-5000"></el-radio>
            <el-radio label="5001-10000"></el-radio>
            <el-radio label="10001-15000"></el-radio>
            <el-radio label="15001-20000"></el-radio>
            <el-radio label="＞20000"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>18岁前主要生活城市</h4>
          <el-input style="width: 180px" v-model="form.city"></el-input>
        </el-form-item>

        <el-form-item>
          <h4>婚姻状况</h4>
          <el-radio-group v-model="form.maritalstatus">
            <el-radio label="单身"></el-radio>
            <el-radio label="有交往对象"></el-radio>
            <el-radio label="已婚"></el-radio>
            <el-radio label="离异"></el-radio>
            <el-radio label="丧偶"></el-radio>
            <el-radio label="再婚"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>16岁前父母婚姻状况</h4>
          <el-radio-group v-model="form.maritalstatus16">
            <el-radio label="单身"></el-radio>
            <el-radio label="有交往对象"></el-radio>
            <el-radio label="已婚"></el-radio>
            <el-radio label="离异"></el-radio>
            <el-radio label="丧偶"></el-radio>
            <el-radio label="再婚"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>家庭成员状况</h4>
          <el-radio-group v-model="form.familymembers">
            <el-radio label="无老人和孩子负担"></el-radio>
            <el-radio label="有老人负担"></el-radio>
            <el-radio label="有孩子负担"></el-radio>
            <el-radio label="同时有老人和孩子负担"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>生活幸福感水平</h4>
          <el-radio-group v-model="form.happy">
            <el-radio label="1(不幸)"></el-radio>
            <el-radio label="2"></el-radio>
            <el-radio label="3"></el-radio>
            <el-radio label="4"></el-radio>
            <el-radio label="5"></el-radio>
            <el-radio label="6"></el-radio>
            <el-radio label="7"></el-radio>
            <el-radio label="8"></el-radio>
            <el-radio label="9"></el-radio>
            <el-radio label="10(幸福)"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>请问您是否曾经或最近被确诊过有心理问题/疾病或其他精神疾病?</h4>
          <el-radio-group v-model="form.illness">
            <el-radio label="无"></el-radio>
            <el-radio label="有">
              是
              <el-input style="width: 140px" v-model="form.illnesstype"></el-input>确诊时间为
              <el-input style="width: 140px" v-model="form.illnesstime"></el-input>
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>请问您是否接受过心理治疗或心理咨询?</h4>
          <el-radio-group v-model="form.psychologicalcounseling">
            <el-radio label="无"></el-radio>
            <el-radio label="有">
              是
              <el-input v-model="form.psychologicalcounselingdetail"></el-input>
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>若上一题中回答为“有”，那么距离您上一次接受心理治疗或心理咨询过去了多久？</h4>
          <el-input style="width: 180px" v-model="form.lasttime"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="part2" v-if="active === 1">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>
        <el-form-item>
          <h4>1. 我相信我对未来的想法肯定会发生并且会成为现实</h4>
          <el-radio-group v-model.number="form.arr[1]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>2. 我入睡困难</h4>
          <el-radio-group v-model.number="form.arr[2]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>3. 其他事情促使我思考未来</h4>
          <el-radio-group v-model.number="form.arr[3]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>4. 我感到急躁和愤怒</h4>
          <el-radio-group v-model.number="form.arr[4]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>5. 当我想到未来或被提醒未来时，我避免让自己变得情绪化</h4>
          <el-radio-group v-model.number="form.arr[5]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>6. 我会不经意的想到未来</h4>
          <el-radio-group v-model.number="form.arr[6]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>7. 任何提醒都会唤起我对未来的感受</h4>
          <el-radio-group v-model.number="form.arr[7]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>8. 我远离了对未来的提醒</h4>
          <el-radio-group v-model.number="form.arr[8]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>9. 关于未来的图片突然出现在我脑海中</h4>
          <el-radio-group v-model.number="form.arr[9]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>10. 我提心吊胆并且很容易被吓到</h4>
          <el-radio-group v-model.number="form.arr[10]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>11. 我试着不去想未来</h4>
          <el-radio-group v-model.number="form.arr[11]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>12. 我知道我对未来有很多感受，但我没有处理它们</h4>
          <el-radio-group v-model.number="form.arr[12]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>13. 我对未来的感觉有点麻木</h4>
          <el-radio-group v-model.number="form.arr[13]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>14. 我发现自己表现得或感觉像是这一切真的在发生</h4>
          <el-radio-group v-model.number="form.arr[14]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>15. 我很难保持深度睡眠</h4>
          <el-radio-group v-model.number="form.arr[15]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>16. 我对未来充满了强烈的感情</h4>
          <el-radio-group v-model.number="form.arr[16]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>17. 我试图从脑海中消除对未来的想法</h4>
          <el-radio-group v-model.number="form.arr[17]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>18. 我很难集中注意力</h4>
          <el-radio-group v-model.number="form.arr[18]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>19. 对未来的提醒使我有身体上的反应（如出汗/呼吸加快/心跳加速）</h4>
          <el-radio-group v-model.number="form.arr[19]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>20. 我曾梦想过未来</h4>
          <el-radio-group v-model.number="form.arr[20]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>21. 我感到警惕和警觉</h4>
          <el-radio-group v-model.number="form.arr[21]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>22. 我试着不谈未来</h4>
          <el-radio-group v-model.number="form.arr[22]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>23. 我感到精力充沛，兴奋不已</h4>
          <el-radio-group v-model.number="form.arr[23]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>24. 我感到很兴奋和乐观</h4>
          <el-radio-group v-model.number="form.arr[24]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>25. 当我把某件事情做得很好时，我会继续喜欢做它</h4>
          <el-radio-group v-model.number="form.arr[25]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>26. 当我得到想要的事物时，我觉得兴奋并充满能量</h4>
          <el-radio-group v-model.number="form.arr[26]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>27. 被批评或指责会让我感到很难过</h4>
          <el-radio-group v-model.number="form.arr[27]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>28. 若想到/知道有人生我的气，我就觉得很紧张或心情不好</h4>
          <el-radio-group v-model.number="form.arr[28]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>29. 若我觉得有不愉快的事可能发生，那我就会变得坐立不安</h4>
          <el-radio-group v-model.number="form.arr[29]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>30. 有好事情发生在我身上时，我会受到很大的影响</h4>
          <el-radio-group v-model.number="form.arr[30]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>31. 如果我想到没把某件事情做好，我就觉得紧张</h4>
          <el-radio-group v-model.number="form.arr[31]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>32. 赢得比赛让我很兴奋</h4>
          <el-radio-group v-model.number="form.arr[32]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>33. 我担心我会犯错</h4>
          <el-radio-group v-model.number="form.arr[33]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>34. 我能适应变化</h4>
          <el-radio-group v-model.number="form.arr[34]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>35. 我有亲密、安全的关系</h4>
          <el-radio-group v-model.number="form.arr[35]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>36. 有时命运或上帝能帮助我</h4>
          <el-radio-group v-model.number="form.arr[36]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>37. 无论发生什么我都能应付</h4>
          <el-radio-group v-model.number="form.arr[37]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>38. 过去的成功让我有信心面对挑战</h4>
          <el-radio-group v-model.number="form.arr[38]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>39. 我能看到事情幽默的一面</h4>
          <el-radio-group v-model.number="form.arr[39]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>40. 应对压力使我感到有力量</h4>
          <el-radio-group v-model.number="form.arr[40]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>41. 经历艰难或疾病后，我往往会很快恢复</h4>
          <el-radio-group v-model.number="form.arr[41]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>42. 事情发生总是有原因的</h4>
          <el-radio-group v-model.number="form.arr[42]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>43. 无论结果怎样，我都会尽自己最大努力</h4>
          <el-radio-group v-model.number="form.arr[43]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>44. 我能实现自己的目标</h4>
          <el-radio-group v-model.number="form.arr[44]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>45. 当事情看起来没什么希望时，我不会轻易放弃</h4>
          <el-radio-group v-model.number="form.arr[45]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>46. 我知道去哪里寻求帮助</h4>
          <el-radio-group v-model.number="form.arr[46]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>47. 在压力下，我能够集中注意力并清晰思考</h4>
          <el-radio-group v-model.number="form.arr[47]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>48. 我喜欢在解决问题时承担领袖角色</h4>
          <el-radio-group v-model.number="form.arr[48]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>49. 我不会因失败而气馁</h4>
          <el-radio-group v-model.number="form.arr[49]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>50. 我认为自己是个强有力的人</h4>
          <el-radio-group v-model.number="form.arr[50]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>51. 我能做出不寻常的或艰难的决定</h4>
          <el-radio-group v-model.number="form.arr[51]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>52. 我能处理不快乐的情绪</h4>
          <el-radio-group v-model.number="form.arr[52]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>53. 我不得不按照预感行事</h4>
          <el-radio-group v-model.number="form.arr[53]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>54. 我有强烈的目的感</h4>
          <el-radio-group v-model.number="form.arr[54]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>55. 我感觉能掌控自己的生活</h4>
          <el-radio-group v-model.number="form.arr[55]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>56. 我喜欢挑战</h4>
          <el-radio-group v-model.number="form.arr[56]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>57. 我努力工作以达到目标</h4>
          <el-radio-group v-model.number="form.arr[57]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>58. 我对自己的成绩感到骄傲</h4>
          <el-radio-group v-model.number="form.arr[58]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="part3" v-if="active === 2">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>

        <h4>请根据您在郁闷的时候可能会想或做的一些事(但不是您觉得应该做的)作答：</h4>
        <el-form-item>
          <h4>f1. 我常常思考自己是多么孤独</h4>
          <el-radio-group v-model.number="form.arr[59]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f2. 我常常想：“如果我不能停止想这些，我就不能继续手头的事”</h4>
          <el-radio-group v-model.number="form.arr[60]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f3. 常常思考自己疲劳或痛苦的感觉</h4>
          <el-radio-group v-model.number="form.arr[61]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f4. 我常常想：“集中注意力是多么困难”</h4>
          <el-radio-group v-model.number="form.arr[62]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f5. 我常常思考自己是多么消极被动、毫无动力</h4>
          <el-radio-group v-model.number="form.arr[63]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f6. 我常常想我对其他事感到麻木</h4>
          <el-radio-group v-model.number="form.arr[64]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f7. 我常常想如果这种感觉持续的话，就无法集中注意</h4>
          <el-radio-group v-model.number="form.arr[65]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f8. 我常常想我为什么感到如此伤心</h4>
          <el-radio-group v-model.number="form.arr[66]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f9. 我常常想我的失败、缺点、错误和过失</h4>
          <el-radio-group v-model.number="form.arr[67]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f10. 我常常想：“我对任何事都提不起劲来”</h4>
          <el-radio-group v-model.number="form.arr[68]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f11. 我常常想我是多么的生自己的气</h4>
          <el-radio-group v-model.number="form.arr[69]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f1. 我常常思考自己是多么孤独</h4>
          <el-radio-group v-model.number="form.arr[59]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f2. 我常常想：“如果我不能停止想这些，我就不能继续手头的事”</h4>
          <el-radio-group v-model.number="form.arr[60]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f3. 常常思考自己疲劳或痛苦的感觉</h4>
          <el-radio-group v-model.number="form.arr[61]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f4. 我常常想：“集中注意力是多么困难”</h4>
          <el-radio-group v-model.number="form.arr[62]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f5. 我常常思考自己是多么消极被动、毫无动力</h4>
          <el-radio-group v-model.number="form.arr[63]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f6. 我常常想我对其他事感到麻木</h4>
          <el-radio-group v-model.number="form.arr[64]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f7. 我常常想如果这种感觉持续的话，就无法集中注意</h4>
          <el-radio-group v-model.number="form.arr[65]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f8. 我常常想我为什么感到如此伤心</h4>
          <el-radio-group v-model.number="form.arr[66]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f9. 我常常想我的失败、缺点、错误和过失</h4>
          <el-radio-group v-model.number="form.arr[67]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f10. 我常常想：“我对任何事都提不起劲来”</h4>
          <el-radio-group v-model.number="form.arr[68]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f11. 我常常想我是多么的生自己的气</h4>
          <el-radio-group v-model.number="form.arr[69]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f1. 我常常思考自己是多么孤独</h4>
          <el-radio-group v-model.number="form.arr[59]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f2. 我常常想：“如果我不能停止想这些，我就不能继续手头的事”</h4>
          <el-radio-group v-model.number="form.arr[60]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f3. 常常思考自己疲劳或痛苦的感觉</h4>
          <el-radio-group v-model.number="form.arr[61]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f4. 我常常想：“集中注意力是多么困难”</h4>
          <el-radio-group v-model.number="form.arr[62]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f5. 我常常思考自己是多么消极被动、毫无动力</h4>
          <el-radio-group v-model.number="form.arr[63]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f6. 我常常想我对其他事感到麻木</h4>
          <el-radio-group v-model.number="form.arr[64]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f7. 我常常想如果这种感觉持续的话，就无法集中注意</h4>
          <el-radio-group v-model.number="form.arr[65]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f8. 我常常想我为什么感到如此伤心</h4>
          <el-radio-group v-model.number="form.arr[66]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f9. 我常常想我的失败、缺点、错误和过失</h4>
          <el-radio-group v-model.number="form.arr[67]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f10. 我常常想：“我对任何事都提不起劲来”</h4>
          <el-radio-group v-model.number="form.arr[68]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>f11. 我常常想我是多么的生自己的气</h4>
          <el-radio-group v-model.number="form.arr[69]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>81. 做事时提不起劲或没有兴趣</h4>
          <el-radio-group v-model.number="form.arr[70]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>82. 感到心情低落、沮丧或绝望</h4>
          <el-radio-group v-model.number="form.arr[71]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>83. 入睡困难、睡不安稳或睡眠过多</h4>
          <el-radio-group v-model.number="form.arr[72]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>84. 感觉疲倦或没有活力</h4>
          <el-radio-group v-model.number="form.arr[73]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>85. 食欲不振或吃太多</h4>
          <el-radio-group v-model.number="form.arr[74]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>86. 觉得自己很糟，或觉得自己很失败，或让自己或家人失望</h4>
          <el-radio-group v-model.number="form.arr[75]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>87. 对事物专注有困难，例如阅读报纸或看电视时不能集中注意力</h4>
          <el-radio-group v-model.number="form.arr[76]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>88. 动作或说话速度缓慢到别人已经觉察？或正好相反，烦躁或坐立不安、动来动去的情况更胜于平常</h4>
          <el-radio-group v-model.number="form.arr[77]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>89. 有不如死掉或用某种方式伤害自己的念头</h4>
          <el-radio-group v-model.number="form.arr[78]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">有时</el-radio>
            <el-radio label="3">经常</el-radio>
            <el-radio label="4">总是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="part4" v-if="active === 3">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>
        <h4>请根据自己近一个月内的情况作答</h4>
        <h4>其中1=0-5天，2=很少(6-12天)，3=有时(13-18天)，4=经常(19-24天)，5=总是(25-31天)</h4>
        <el-form-item>
          <h4>90. 您晚上已睡过觉，白天是否打瞌睡?</h4>
          <el-radio-group v-model.number="form.arr[79]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>91. 您是否有入睡困难?</h4>
          <el-radio-group v-model.number="form.arr[80]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>92. 您入睡后中间是否易醒?</h4>
          <el-radio-group v-model.number="form.arr[81]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>93. 您在醒后是否难于再入睡?</h4>
          <el-radio-group v-model.number="form.arr[82]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>94. 您是否多梦或常被噩梦惊醒?</h4>
          <el-radio-group v-model.number="form.arr[83]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>95. 为了睡眠，您是否吃安眠药?</h4>
          <el-radio-group v-model.number="form.arr[84]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="part5" v-if="active === 4">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>

        <h4>请根据自己的情况作答</h4>
        <h4>1=极少(一年几次或更少)，2=偶尔（一个月一次或更少），3=经常（一个月几次），4=频繁（两星期几次），5=非常频繁（一星期几次），6=每天</h4>
        <el-form-item>
          <h4>96. 自从开始干这份工作，我对工作越来越不感兴趣</h4>
          <el-radio-group v-model.number="form.arr[85]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>97. 我对工作不像以前那样热心了</h4>
          <el-radio-group v-model.number="form.arr[86]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>98. 我怀疑自己所做工作的意义</h4>
          <el-radio-group v-model.number="form.arr[87]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>99. 我对自己所做工作是否有贡献越来越不关心</h4>
          <el-radio-group v-model.number="form.arr[88]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>100. 我能有效解决工作中出现的问题</h4>
          <el-radio-group v-model.number="form.arr[89]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>101. 我觉得我在为公司作有用的贡献</h4>
          <el-radio-group v-model.number="form.arr[90]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>102.在我看来，我擅长自己的工作</h4>
          <el-radio-group v-model.number="form.arr[91]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>103. 当完成工作上的一些事情时，我感到非常高兴</h4>
          <el-radio-group v-model.number="form.arr[92]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>104. 我完成了很多有价值的工作</h4>
          <el-radio-group v-model.number="form.arr[93]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>105. 我自信能有效地完成各项工作</h4>
          <el-radio-group v-model.number="form.arr[94]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="part6" v-if="active === 5">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>
        <h4>本问卷调查的是你儿童期（16岁以前）的成长经历。请根据你的体会在每道问题后面选择最适合你情况的选项</h4>
        <el-form-item>
          <h4>106. 我吃不饱</h4>
          <el-radio-group v-model.number="form.arr[95]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>107. 有人照顾我、保护我</h4>
          <el-radio-group v-model.number="form.arr[96]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>108. 有人喊我“笨蛋”“懒虫”“丑八怪”等我不喜欢的外号</h4>
          <el-radio-group v-model.number="form.arr[97]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>109. 父母过于酗酒或挥霍浪费，以致不能照顾家庭</h4>
          <el-radio-group v-model.number="form.arr[98]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>110. 家里有人使我觉得自己很重要或不一般</h4>
          <el-radio-group v-model.number="form.arr[99]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>111. 我不得不穿脏衣服</h4>
          <el-radio-group v-model.number="form.arr[100]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>112. 我感到家里人爱我</h4>
          <el-radio-group v-model.number="form.arr[101]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>113. 我觉得父母希望从来没有生过我</h4>
          <el-radio-group v-model.number="form.arr[102]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>114. 家里曾有人把我打伤的很重</h4>
          <el-radio-group v-model.number="form.arr[103]">
            <el-radio label="1">1</el-radio>
            <el-radio label="2">2</el-radio>
            <el-radio label="3">3</el-radio>
            <el-radio label="4">4</el-radio>
            <el-radio label="5">5</el-radio>
            <el-radio label="5">6</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>115. 当时我并不希望去改变家里的什么</h4>
          <el-radio-group v-model.number="form.arr[104]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>116. 家里有人打我很重</h4>
          <el-radio-group v-model.number="form.arr[105]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>117. 我曾受到过家人较重的体罚</h4>
          <el-radio-group v-model.number="form.arr[106]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>118. 家里人彼此互相关心</h4>
          <el-radio-group v-model.number="form.arr[107]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>119. 家里有人向我说过刻薄或侮辱性的话</h4>
          <el-radio-group v-model.number="form.arr[108]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>120. 我觉得我小时候受到了躯体虐待</h4>
          <el-radio-group v-model.number="form.arr[109]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>121. 我的童年是美好的</h4>
          <el-radio-group v-model.number="form.arr[110]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>122. 我被打的很重，引起了老师、邻居或医生等人的注意</h4>
          <el-radio-group v-model.number="form.arr[111]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>123. 我觉得家里有人不喜欢我</h4>
          <el-radio-group v-model.number="form.arr[112]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>124. 家里人关系很亲密</h4>
          <el-radio-group v-model.number="form.arr[113]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>125. 有人试图以性的方式触摸我或让我触摸他</h4>
          <el-radio-group v-model.number="form.arr[114]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>126. 有人威逼或引诱我同他做性方面的事</h4>
          <el-radio-group v-model.number="form.arr[115]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>127. 我的家是世上最好的</h4>
          <el-radio-group v-model.number="form.arr[116]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>128. 有人试图让我做或看性方面的事</h4>
          <el-radio-group v-model.number="form.arr[117]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>129. 有人猥亵我</h4>
          <el-radio-group v-model.number="form.arr[118]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>130. 我认为我曾受到情感虐待</h4>
          <el-radio-group v-model.number="form.arr[119]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>131. 如果需要，会有人送我去医院</h4>
          <el-radio-group v-model.number="form.arr[120]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>132. 我认为我受到了性虐待</h4>
          <el-radio-group v-model.number="form.arr[121]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <h4>133. 家是我力量和支持的源泉</h4>
          <el-radio-group v-model.number="form.arr[122]">
            <el-radio label="1">从不</el-radio>
            <el-radio label="2">很少</el-radio>
            <el-radio label="3">有时</el-radio>
            <el-radio label="4">经常</el-radio>
            <el-radio label="5">总是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="part7" v-if="active === 6"></div>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

 

<script>
export default {
  data() {
    return {
      active: 0,
      form: {
        sex: "",
        education: "",
        job: "",
        otherjob: "",
        post: "",
        department: "",
        industy: "",
        departmenttype: "",
        workmonth: "",
        worktime: "",
        city: "",
        maritalstatus: "",
        maritalstatus16: "",
        familymembers: "",
        happy: "",
        illness: "",
        illnesstype: "",
        illnesstime: "",
        psychologicalcounseling: "",
        psychologicalcounselingdetail: "",
        lasttime: "",
        arr: [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
        ]
      }
    };
  },

  methods: {
    next() {
      if (this.active++ > 5) this.$router.push("/LoginTest");
    }
  },
  computed: {
    sum: function() {
      var a = 0;
      for (var i = 1; i < 59; i++) {
        a = a + this.form.arr[i];
      }
      return a;
    }
  }
};
</script>

<style>
</style>