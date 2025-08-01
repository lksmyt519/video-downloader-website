// فتح النوافذ المنبثقة
document.getElementById('aboutBtn').onclick = () => openPopup('aboutPopup');
document.getElementById('reportBtn').onclick = () => openPopup('reportPopup');
document.getElementById('settingsBtn').onclick = () => openPopup('settingsPopup');

// أزرار الأكواد السرية
document.getElementById('devBtn').onclick = () => {
    openPopup('codePopup');
    document.getElementById('secretCode').setAttribute('data-type', 'developer');
};
document.getElementById('jamalBtn').onclick = () => {
    openPopup('codePopup');
    document.getElementById('secretCode').setAttribute('data-type', 'jamal');
};

// دالة فتح النافذة
function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

// دالة إغلاق النافذة
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// التحقق من الأكواد السرية
function checkCode() {
    const code = document.getElementById('secretCode').value;
    const type = document.getElementById('secretCode').getAttribute('data-type');

    if (type === 'developer' && code === '029121') {
        alert('تم تفعيل وضع المطور! يمكنك الآن رفع الفيديوهات (تجريبي)');
    } else if (type === 'jamal' && code === '065691') {
        alert('تم تفعيل إعدادات Jamal! يمكنك تغيير الخلفية.');
        document.body.style.background = 'linear-gradient(135deg, #004d40, #00796b)';
    } else {
        alert('الكود غير صحيح');
    }

    closePopup('codePopup');
}

// تفعيل الوضع المظلم
function toggleDarkMode() {
    document.body.style.background = '#000';
    document.body.style.color = '#fff';
}
