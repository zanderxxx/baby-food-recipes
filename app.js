// ===== 食材插画映射（emoji + 水彩色调）=====
const FOOD_ILLUSTRATIONS = {
  '香蕉':   { emoji: '🍌', c1: '#FBE9A8', c2: '#F7DC6F', c3: '#FEF3C7' },
  '苹果':   { emoji: '🍎', c1: '#FFCDD2', c2: '#E57373', c3: '#FFE0E3' },
  '梨':     { emoji: '🍐', c1: '#D4EDAA', c2: '#A8D560', c3: '#EAF5C8' },
  '蓝莓':   { emoji: '🫐', c1: '#D0C4F0', c2: '#9B8ED4', c3: '#EAE4F8' },
  '草莓':   { emoji: '🍓', c1: '#FFCDD2', c2: '#F06292', c3: '#FFE4E8' },
  '牛油果': { emoji: '🥑', c1: '#C8E6C9', c2: '#7DB87D', c3: '#E0F0E0' },
  '胡萝卜': { emoji: '🥕', c1: '#FDDCB8', c2: '#FAB86E', c3: '#FCEFD8' },
  '南瓜':   { emoji: '🎃', c1: '#FDDCB8', c2: '#F39C2C', c3: '#FDE8C4' },
  '土豆':   { emoji: '🥔', c1: '#FFF9C4', c2: '#F4D03F', c3: '#FEFDE7' },
  '红薯':   { emoji: '🍠', c1: '#F8C8D8', c2: '#D4608C', c3: '#FCE4EE' },
  '山药':   { emoji: '🌿', c1: '#D7EDD4', c2: '#8BC48A', c3: '#E8F5E9' },
  '西蓝花': { emoji: '🥦', c1: '#C8E6C9', c2: '#66BB6A', c3: '#DCEDC8' },
  '菠菜':   { emoji: '🥬', c1: '#C0DDD7', c2: '#5BAE9C', c3: '#D4EDE8' },
  '油菜':   { emoji: '🥬', c1: '#C8E6C9', c2: '#81C784', c3: '#E8F5E9' },
  '苋菜':   { emoji: '🌿', c1: '#C8E6C9', c2: '#66BB6A', c3: '#DCEDC8' },
  '芹菜':   { emoji: '🥬', c1: '#C0DDD7', c2: '#4DB6AC', c3: '#D4EDE8' },
  '豌豆':   { emoji: '🫛', c1: '#C8E6C9', c2: '#A5D6A7', c3: '#DCEDC8' },
  '玉米':   { emoji: '🌽', c1: '#FFF9C4', c2: '#F9E79F', c3: '#FEFBDE' },
  '西红柿': { emoji: '🍅', c1: '#FFCDD2', c2: '#E57373', c3: '#FFE0E3' },
  '茄子':   { emoji: '🍆', c1: '#E1BEE7', c2: '#9C27B0', c3: '#F3E5F5' },
  '洋葱':   { emoji: '🧅', c1: '#FFF9C4', c2: '#F4D03F', c3: '#FEFBDE' },
  '冬瓜':   { emoji: '🥒', c1: '#C8E6C9', c2: '#81C784', c3: '#E8F5E9' },
  '莲藕':   { emoji: '🪷', c1: '#F8BBD9', c2: '#F48FB1', c3: '#FCE4EE' },
  '白萝卜': { emoji: '🌿', c1: '#F5F5F5', c2: '#E0E0E0', c3: '#FAFAFA' },
  '豆腐':   { emoji: '🤍', c1: '#F5F5F5', c2: '#B0BEC5', c3: '#FAFAFA' },
  '紫薯':   { emoji: '🍠', c1: '#D0C4F0', c2: '#9B8ED4', c3: '#EAE4F8' },
  '苦瓜':   { emoji: '🥒', c1: '#C0DDD7', c2: '#4DB6AC', c3: '#D4EDE8' },
  '芦笋':   { emoji: '🌿', c1: '#C8E6C9', c2: '#81C784', c3: '#E8F5E9' },
  '小米':   { emoji: '🌾', c1: '#FFF9C4', c2: '#F0D060', c3: '#FEFBDE' },
  '大米':   { emoji: '🍚', c1: '#F0EEE8', c2: '#D0CABB', c3: '#FAF8F3' },
  '燕麦':   { emoji: '🌾', c1: '#FFF9C4', c2: '#D4B460', c3: '#FEF6DE' },
  '面粉':   { emoji: '🍞', c1: '#FBE9C8', c2: '#D4A060', c3: '#FEF3E0' },
  '鸡蛋':   { emoji: '🥚', c1: '#FFFDE7', c2: '#FFF176', c3: '#FFFFF0' },
  '猪肉':   { emoji: '🥩', c1: '#FFCDD2', c2: '#EF9A9A', c3: '#FFE8E8' },
  '鸡肉':   { emoji: '🍗', c1: '#FDDCB8', c2: '#FAC86E', c3: '#FCEFD8' },
  '鱼肉':   { emoji: '🐟', c1: '#B3E5FC', c2: '#81D4FA', c3: '#E1F5FE' },
  '虾':     { emoji: '🦐', c1: '#FFCCBC', c2: '#FF8A65', c3: '#FFE0D4' },
  '牛肉':   { emoji: '🥩', c1: '#FFCDD2', c2: '#EF5350', c3: '#FFE8E8' },
};

function getIllustration(ingredients) {
  for (const ing of ingredients) {
    for (const [key, val] of Object.entries(FOOD_ILLUSTRATIONS)) {
      if (ing.includes(key)) return val;
    }
  }
  return { emoji: '🥣', c1: '#F5C4B8', c2: '#E8A090', c3: '#FDDCB8' };
}

// ===== 食材列表（与 recipes_structured.json 的 ingredients 字段对应）=====
const INGREDIENTS = {
  veggies: ['胡萝卜', '南瓜', '土豆', '红薯', '山药', '西蓝花', '菠菜', '油菜', '苋菜', '芹菜', '豌豆', '玉米', '西红柿', '茄子', '洋葱', '冬瓜', '莲藕', '白萝卜', '豆腐', '紫薯', '苦瓜', '芦笋'],
  fruits: ['香蕉', '苹果', '梨', '蓝莓', '草莓', '牛油果'],
  grains: ['小米', '大米', '燕麦', '面粉'],
  protein: ['鸡蛋', '猪肉', '鸡肉', '鱼肉', '虾', '牛肉']
};

const INGREDIENT_LABELS = {
  veggies: '🥦 蔬菜类',
  fruits: '🍎 水果类',
  grains: '🌾 谷物类',
  protein: '🥩 蛋白质'
};

// ===== 食材关键词映射（搜索食谱的 ingredients 字段用）=====
// 把用户选择的食材 → 食谱 ingredients 数组中可能出现的文字
const INGREDIENT_KEYWORDS = {
  '胡萝卜': ['胡萝卜'],
  '南瓜': ['南瓜'],
  '土豆': ['土豆'],
  '红薯': ['红薯'],
  '山药': ['山药'],
  '西蓝花': ['西蓝花'],
  '菠菜': ['菠菜'],
  '油菜': ['油菜'],
  '苋菜': ['苋菜'],
  '芹菜': ['芹菜'],
  '豌豆': ['豌豆'],
  '玉米': ['玉米'],
  '西红柿': ['西红柿', '番茄'],
  '茄子': ['茄子'],
  '洋葱': ['洋葱'],
  '冬瓜': ['冬瓜'],
  '莲藕': ['莲藕'],
  '白萝卜': ['白萝卜'],
  '豆腐': ['豆腐'],
  '紫薯': ['紫薯'],
  '苦瓜': ['苦瓜'],
  '芦笋': ['芦笋'],
  '香蕉': ['香蕉'],
  '苹果': ['苹果'],
  '梨': ['梨'],
  '蓝莓': ['蓝莓'],
  '草莓': ['草莓'],
  '牛油果': ['牛油果', '鳄梨'],
  '小米': ['小米'],
  '大米': ['大米', '米粉', '米饭'],
  '燕麦': ['燕麦'],
  '面粉': ['面粉', '面条', '面食', '粒粒面'],
  '鸡蛋': ['鸡蛋', '蛋黄', '蛋液'],
  '猪肉': ['猪肉', '猪里脊', '猪里脊肉', '瘦肉'],
  '鸡肉': ['鸡肉', '鸡胸肉'],
  '鱼肉': ['鱼肉', '鱼', '鳕鱼'],
  '虾': ['虾', '虾仁', '虾泥'],
  '牛肉': ['牛肉', '牛里脊', '牛里脊肉']
};

// ===== 数字工具 =====
function parseLikes(likes) {
  if (!likes) return 0;
  const s = String(likes).trim();
  if (s.includes('万')) return Math.round(parseFloat(s) * 10000);
  return parseInt(s) || 0;
}

function numberToChinese(n) {
  const chars = ['一', '二', '三', '四', '五'];
  return chars[n - 1] || n;
}

// ===== 核心筛选逻辑 =====
// 规则：
// 1. 月龄匹配：min_age <= 选择月龄 <= max_age
// 2. 过敏规避：allergens_contain 中不含用户已知过敏食材
// 3. 已排敏食材匹配：
//    - 如果用户选了已排敏食材，优先返回使用这些食材的食谱
//    - 如未选，则返回月龄/无过敏限制内的所有食谱
function filterRecipes(allRecipes, { age, allergens, testedIngredients }) {
  // Step 1: 基础过滤（月龄 + 排除过敏）
  let pool = allRecipes.filter(r => {
    // 月龄范围匹配
    if (age < r.min_age) return false;
    if (r.max_age && age > r.max_age) return false;

    // 排除含过敏食材的食谱
    if (allergens.length > 0) {
      const hasAllergen = allergens.some(a => {
        const keywords = INGREDIENT_KEYWORDS[a] || [a];
        return r.allergens_contain.some(rc =>
          keywords.some(k => rc.includes(k) || k.includes(rc))
        );
      });
      if (hasAllergen) return false;
    }
    return true;
  });

  // Step 2: 如果有已排敏食材，优先返回匹配这些食材的食谱
  if (testedIngredients.length > 0) {
    // 找出使用了至少1种已排敏食材的食谱
    const matched = pool.filter(r => {
      return testedIngredients.some(ti => {
        const keywords = INGREDIENT_KEYWORDS[ti] || [ti];
        return r.ingredients.some(ing =>
          keywords.some(k => ing.includes(k) || k.includes(ing))
        );
      });
    });

    // 按匹配食材数量降序排序（匹配越多越靠前）
    matched.sort((a, b) => {
      const scoreB = countMatches(b, testedIngredients);
      const scoreA = countMatches(a, testedIngredients);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return parseLikes(b.likes) - parseLikes(a.likes);
    });

    // 如果匹配结果 >= 3，用匹配结果；否则补充其他食谱凑够5个
    if (matched.length >= 3) {
      return matched.slice(0, 5);
    }

    // 补充非匹配食谱
    const matchedIds = new Set(matched.map(r => r.rank));
    const extras = pool
      .filter(r => !matchedIds.has(r.rank))
      .sort((a, b) => parseLikes(b.likes) - parseLikes(a.likes));

    return [...matched, ...extras].slice(0, 5);
  }

  // Step 3: 无已排敏食材选择时，直接按点赞数返回
  pool.sort((a, b) => parseLikes(b.likes) - parseLikes(a.likes));
  return pool.slice(0, 5);
}

function countMatches(recipe, testedIngredients) {
  return testedIngredients.filter(ti => {
    const keywords = INGREDIENT_KEYWORDS[ti] || [ti];
    return recipe.ingredients.some(ing =>
      keywords.some(k => ing.includes(k) || k.includes(ing))
    );
  }).length;
}

// ===== 生成注意事项（根据月龄 / 出牙 / 过敏补充通用提示）=====
function getExtraNotes(age, teething, allergens) {
  const notes = [];
  if (teething === 'yes') {
    notes.push('已出牙的宝宝可以适当增加食物的颗粒感，帮助锻炼咀嚼肌肉 🦷');
  }
  if (age <= 6) {
    notes.push('6月龄刚开始添加辅食，每次只引入一种新食材，观察3天无异常再换下一种');
  }
  if (allergens.length > 0) {
    notes.push(`已为你规避含以下过敏食材的食谱：${allergens.join('、')}`);
  }
  return notes;
}

// ===== 手帐可视化辅助函数 =====

// 高亮数字+单位
function highlightNumbers(text) {
  return text.replace(/(\d+(?:[.\-]\d+)?)\s*(ml|g|克|次|分钟|°C|天|周|个月|大勺|小勺|汤匙|茶匙|片|个|根|块|ml)/g,
    '<span class="hl-num">$1<small>$2</small></span>');
}

// 水平波浪 SVG 连接线
function hWaveSVG(color) {
  return `<svg viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0,10 C10,3 20,17 30,10 C40,3 50,17 60,10" fill="none" stroke="${color}" stroke-width="1.8" stroke-dasharray="4,2.5" stroke-linecap="round"/>
  </svg>`;
}

// 竖向波浪 SVG 连接线
function vWaveSVG() {
  return `<svg viewBox="0 0 20 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,0 C4,7 16,14 10,22 C4,29 16,36 10,36" fill="none" stroke="#D8CCBC" stroke-width="1.5" stroke-dasharray="3,2.5" stroke-linecap="round"/>
  </svg>`;
}

// 辅食添加计划可视化
function generatePlanVisual(plan) {
  const stats = [
    { icon: '🔁', label: '喂食频次', value: plan.frequency, bg: '#FEF0EE', border: '#E07A5F', wave: '#E07A5F' },
    { icon: '🥄', label: '单次用量', value: plan.amount,    bg: '#EAF5EF', border: '#7DB8A4', wave: '#7DB8A4' },
    { icon: '🫧', label: '食物质地', value: plan.texture,   bg: '#FBF6E4', border: '#C9A940', wave: '#C9A940' },
  ];
  let html = '<div class="plan-visual">';
  stats.forEach((s, i) => {
    html += `<div class="plan-stat" style="background:${s.bg};border-color:${s.border}">
      <span class="plan-stat-icon">${s.icon}</span>
      <span class="plan-stat-label">${s.label}</span>
      <span class="plan-stat-value">${highlightNumbers(s.value)}</span>
    </div>`;
    if (i < stats.length - 1) {
      html += `<div class="plan-wave">${hWaveSVG(s.wave)}</div>`;
    }
  });
  html += '</div>';
  return html;
}

// 辅食制作流程可视化
function generateProcessVisual(steps) {
  let html = '<div class="process-visual">';
  steps.forEach((step, i) => {
    const colors = ['#E07A5F','#7DB8A4','#C9A940','#B8A9D9','#E07A5F'];
    const c = colors[i % colors.length];
    html += `<div class="process-step">
      <div class="step-track">
        <div class="step-circle" style="background:${c};border-color:${c}">${i + 1}</div>
        ${i < steps.length - 1 ? `<div class="step-vwave">${vWaveSVG()}</div>` : ''}
      </div>
      <div class="step-content">${highlightNumbers(step)}</div>
    </div>`;
  });
  html += '</div>';
  return html;
}

// ===== 渲染食谱卡片 =====
function renderRecipes(recipes, formData) {
  const container = document.getElementById('right-content');
  const { age, teething, gender, testedIngredients, allergens } = formData;

  if (recipes.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="icon">🔍</div>
        <h3>暂未找到合适的食谱</h3>
        <p>可以尝试减少过敏食材的限制，<br>或增加已排敏食材的选择哦～</p>
      </div>`;
    return;
  }

  const genderEmoji = gender === 'boy' ? '👦' : '👧';
  const extraNotes = getExtraNotes(age, teething, allergens);

  const headerHtml = `
    <div class="recipe-header">
      <h2>🍽️ 为宝宝推荐 ${recipes.length} 个食谱方案</h2>
      <p class="result-info">已根据月龄、排敏食材和过敏情况智能筛选</p>
      <div class="tag-list">
        <span class="info-tag">${genderEmoji} ${gender === 'boy' ? '弟弟' : '妹妹'}</span>
        <span class="info-tag">${age} 个月</span>
        <span class="info-tag green">${teething === 'yes' ? '🦷 已出牙' : '😊 未出牙'}</span>
        ${testedIngredients.length > 0 ? `<span class="info-tag green">✅ 排敏 ${testedIngredients.length} 种</span>` : ''}
        ${allergens.length > 0 ? `<span class="info-tag pink">⚠️ 规避 ${allergens.length} 种</span>` : ''}
      </div>
    </div>`;

  const cardsHtml = recipes.map((recipe, idx) => {
    const planNum = `方案${numberToChinese(idx + 1)}`;

    // 合并食谱自带 notes + 通用提示
    const allNotes = [...recipe.notes, ...extraNotes];

    // 匹配到的已排敏食材高亮显示
    const matchedIngredients = recipe.ingredients.filter(ing =>
      testedIngredients.some(ti => {
        const keywords = INGREDIENT_KEYWORDS[ti] || [ti];
        return keywords.some(k => ing.includes(k) || k.includes(ing));
      })
    );

    const ill = getIllustration(recipe.ingredients);
    const illustrationHtml = `<div class="food-illustration" style="--c1:${ill.c1};--c2:${ill.c2};--c3:${ill.c3}">
      <span class="ill-emoji">${ill.emoji}</span>
    </div>`;

    return `
      <div class="recipe-card">
        <div class="card-header">
          ${illustrationHtml}
          <div class="card-title-area">
            <div>
              <div class="plan-label">方案${numberToChinese(idx + 1)}</div>
              <div class="card-title">${recipe.title}</div>
              <div class="card-ingredients">
                ${recipe.ingredients.map(ing => {
                  const isMatched = matchedIngredients.some(m => m === ing);
                  return `<span class="ing-tag ${isMatched ? 'matched' : ''}">${ing}</span>`;
                }).join('')}
              </div>
            </div>
            <div class="card-meta">
              <span class="card-likes"><span class="like-icon">❤️</span>${parseLikes(recipe.likes).toLocaleString()} 收藏</span>
              <span class="age-badge">适合 ${recipe.min_age}${recipe.max_age ? '-' + recipe.max_age : '+'} 月</span>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="info-section">
            <h4><span class="icon">📅</span> 辅食添加计划</h4>
            ${generatePlanVisual(recipe.addition_plan)}
          </div>

          <div class="info-section">
            <h4><span class="icon">👨‍🍳</span> 辅食制作流程</h4>
            ${generateProcessVisual(recipe.process)}
          </div>

          <div class="info-section">
            <h4><span class="icon">⚠️</span> 注意事项</h4>
            <ul>
              ${allNotes.map(n => `<li>${n}</li>`).join('')}
            </ul>
          </div>

          <div class="info-section">
            <h4><span class="icon">📖</span> 内容参考出处</h4>
            <a class="reference-link" href="${recipe.url}" target="_blank" rel="noopener">
              🔗 查看小红书原帖 →
            </a>
          </div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = headerHtml + `<div class="recipe-list">${cardsHtml}</div>`;
  document.querySelector('.right-panel').scrollTop = 0;
}

// ===== 构建食材选择器（可折叠）=====
function buildIngredientCheckboxes(containerId, type) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = '';
  for (const [category, items] of Object.entries(INGREDIENTS)) {
    html += `
      <div class="ingredient-category">
        <div class="category-toggle" onclick="this.parentElement.classList.toggle('open')">
          <span>${INGREDIENT_LABELS[category]}</span>
          <span class="toggle-arrow">▸</span>
        </div>
        <div class="ingredient-grid ${type}">
          ${items.map(item => `
            <input type="checkbox" id="${type}-${item}" name="${type}" value="${item}">
            <label for="${type}-${item}">${item}</label>
          `).join('')}
        </div>
      </div>`;
  }
  container.innerHTML = html;
}

function getCheckedIngredients(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

function selectAll(name, checked) {
  document.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.checked = checked; });
}

// ===== 提交处理 =====
let allRecipes = [];

function handleSubmit() {
  const ageInput = document.querySelector('input[name="age"]:checked');
  if (!ageInput) { alert('请先选择宝宝的月龄～'); return; }

  const formData = {
    age: parseInt(ageInput.value),
    teething: (document.querySelector('input[name="teething"]:checked') || {}).value || 'no',
    gender: (document.querySelector('input[name="gender"]:checked') || {}).value || 'boy',
    testedIngredients: getCheckedIngredients('tested'),
    allergens: getCheckedIngredients('allergen')
  };

  document.getElementById('right-content').innerHTML =
    `<div class="loading"><div class="spinner"></div><span>正在筛选最适合的食谱...</span></div>`;

  setTimeout(() => {
    const results = filterRecipes(allRecipes, formData);
    renderRecipes(results, formData);
  }, 300);
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', async () => {
  buildIngredientCheckboxes('tested-container', 'tested');
  buildIngredientCheckboxes('allergen-container', 'allergen');

  try {
    const resp = await fetch('./recipes_structured.json');
    allRecipes = await resp.json();
  } catch (e) {
    console.error('加载食谱数据失败:', e);
    document.getElementById('right-content').innerHTML = `
      <div class="no-results">
        <div class="icon">⚠️</div>
        <h3>数据加载失败</h3>
        <p>请确保通过本地服务器运行<br><code>python3 -m http.server 8080</code></p>
      </div>`;
  }

  document.getElementById('btn-submit').addEventListener('click', handleSubmit);

  document.getElementById('btn-select-all-tested').addEventListener('click', () => {
    const total = document.querySelectorAll('input[name="tested"]').length;
    const checked = document.querySelectorAll('input[name="tested"]:checked').length;
    const allChecked = checked === total;
    selectAll('tested', !allChecked);
    document.getElementById('btn-select-all-tested').textContent = allChecked ? '全选' : '取消全选';
  });

  document.getElementById('btn-clear-allergen').addEventListener('click', () => {
    selectAll('allergen', false);
  });
});
