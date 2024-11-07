function loadContent(section) {
    let content = '';
    switch (section) {
        case 'home':
            content = '<h2>Chào mừng đến với IT4409</h2><p>Trang chủ của môn học Công nghệ web và dịch vụ trực tuyến.</p>';
            break;
        case 'course':
            content = '<h2>Thông tin môn học</h2><p>Môn học IT4409 cung cấp kiến thức về phát triển ứng dụng web và dịch vụ trực tuyến...</p>';
            break;
        case 'tech':
            content = '<h2>Các công nghệ Web</h2><p>Các công nghệ bao gồm HTML, CSS, JavaScript, Frameworks...</p>';
            break;
        case 'student':
            content = '<h2>Thông tin sinh viên</h2><p>Họ tên: Nguyễn Văn A<br>Email: nva@example.com<br>Kinh nghiệm: Phát triển web...</p>';
            break;
        default:
            content = '<h2>Chào mừng đến với IT4409</h2><p>Trang chủ của môn học Công nghệ web và dịch vụ trực tuyến.</p>';
            break;
    }
    document.getElementById('mainContent').innerHTML = content;
}
