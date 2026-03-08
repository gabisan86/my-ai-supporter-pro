window.onload = function() {
    const savedGoal = localStorage.getItem("myGoal");
    const savedDeadline = localStorage.getItem("myDeadline");
    const savedSkill = localStorage.getItem("mySkill"); // 追加

    if (savedGoal && savedDeadline) {
        document.getElementById("result").innerHTML = "前回の計画：<br><strong>「" + savedGoal + "」</strong>を達成する！";
    }
};

function generatePlan() {
    const goal = document.getElementById("userInput").value;
    const deadline = document.getElementById("userDeadline").value;
    const skill = document.getElementById("userSkill").value; // 追加
    
    if (goal === "" || deadline === "" || skill === "") {
        alert("すべての項目を入力してくださいね！");
        return;
    }

    localStorage.setItem("myGoal", goal);
    localStorage.setItem("myDeadline", deadline);
    localStorage.setItem("mySkill", skill); // 追加
    document.getElementById("result").innerHTML = "武器と計画を保存しました！";
}

let currentPrompt = "";

function createPrompt() {
    const goal = localStorage.getItem("myGoal");
    const deadline = localStorage.getItem("myDeadline");
    const skill = localStorage.getItem("mySkill"); // 追加

    // AIへの依頼文をパワーアップ！
    currentPrompt = "あなたは優秀な戦略コンサルタントです。\n" +
                   "【私の状況】\n" +
                   "現在のスキル・経験：" + skill + "\n" +
                   "達成したい目標：" + goal + "\n" +
                   "希望期限：" + deadline + "\n\n" +
                   "【依頼内容】\n" +
                   "私の現在のスキルを最大限に活かしつつ、最短で目標達成するための「差別化戦略」と「具体的なステップ」を3つ提案してください。";

    document.getElementById("result").innerHTML = "<strong>【特製依頼書が完成しました】</strong><br><pre style='white-space: pre-wrap; background: #eee; padding: 10px; text-align: left;'>" + currentPrompt + "</pre>";
    document.getElementById("copyBtn").style.display = "block";
}

function copyToClipboard() {
    navigator.clipboard.writeText(currentPrompt).then(() => {
        alert("コピー完了！AIに貼り付けてみてください。");
    });
}