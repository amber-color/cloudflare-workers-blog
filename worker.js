'use strict';

const TEMPLATES = {
    "404": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found - {{siteName}}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #6366f1;
            --secondary-color: #8b5cf6;
            --bg-gradient-start: #667eea;
            --bg-gradient-end: #764ba2;
            --card-bg: rgba(255, 255, 255, 0.95);
            --text-primary: #1e293b;
        }
        
        [data-bs-theme="dark"] {
            --bg-gradient-start: #1a1a2e;
            --bg-gradient-end: #16213e;
            --card-bg: rgba(30, 41, 59, 0.95);
            --text-primary: #f1f5f9;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .error-card {
            background: var(--card-bg);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 3rem;
            text-align: center;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .error-icon {
            font-size: 5rem;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .error-title {
            font-size: 6rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }
        
        .btn-outline-primary {
            border-radius: 12px;
            padding: 0.75rem 1.5rem;
            font-weight: 500;
        }
        
        .theme-toggle {
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
            transform: rotate(180deg);
        }
    </style>
    {{codeBeforHead}}
</head>
<body>
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
        <i class="fa-solid fa-moon" id="theme-icon"></i>
    </button>
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="error-card">
                    <i class="fa-solid fa-ghost error-icon"></i>
                    <h1 class="error-title">404</h1>
                    <h2 class="h4 mb-3" style="color: var(--text-primary);">Page Not Found</h2>
                    <p class="text-muted mb-4">Oops! The page you're looking for has vanished into thin air.</p>
                    <div class="d-flex gap-3 justify-content-center flex-wrap">
                        <a href="/" class="btn btn-primary">
                            <i class="fa-solid fa-house me-2"></i>Go Home
                        </a>
                        <a href="/admin/" class="btn btn-outline-primary">
                            <i class="fa-solid fa-gauge-high me-2"></i>Admin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        }
        
        setTheme(getPreferredTheme());
    </script>
    {{codeBeforBody}}
</body>
</html>
`,
    "admin-users": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Users - {{siteName}}</title>
    
    <!-- Bootstrap 5.3.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6.5.1 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-color: #6366f1;
            --secondary-color: #8b5cf6;
            --primary-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
            --border-radius: 16px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --card-border: #e5e7eb;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --sidebar-bg: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%);
            --navbar-bg: #1e293b;
            --table-hover: #f8fafc;
        }
        
        [data-bs-theme="dark"] {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --card-border: #334155;
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --sidebar-bg: linear-gradient(180deg, #312e81 0%, #4c1d95 100%);
            --navbar-bg: #0f172a;
            --table-hover: #334155;
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
        }
        
        .sidebar {
            background: var(--sidebar-bg);
            color: white;
            min-height: calc(100vh - 60px);
        }
        
        .sidebar .nav-link {
            color: rgba(255, 255, 255, 0.85);
            padding: 0.875rem 1.25rem;
            margin: 0.25rem 0.5rem;
            border-radius: 12px;
            transition: var(--transition);
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .sidebar .nav-link:hover, .sidebar .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            transform: translateX(6px);
        }
        
        .sidebar-brand {
            padding: 1.5rem;
            font-weight: 700;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .navbar-admin {
            background: var(--navbar-bg) !important;
        }
        
        .theme-toggle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: transparent;
            color: white;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .theme-toggle:hover {
            transform: rotate(180deg);
        }
        
        .card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-sm);
        }
        
        .card-header {
            background: transparent;
            border-bottom: 1px solid var(--card-border);
            padding: 1.25rem 1.5rem;
        }
        
        .user-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: white;
        }
        
        .superadmin-avatar { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .admin-avatar { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
        .badge-superadmin { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .badge-admin { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
        
        .stats-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
        }
        
        .table { color: var(--text-primary); }
        .table th { color: var(--text-secondary); border-color: var(--card-border); }
        .table td { border-color: var(--card-border); }
        .table tbody tr:hover { background-color: var(--table-hover); }
        
        .btn-primary {
            background: var(--primary-gradient);
            border: none;
            border-radius: 10px;
        }
        
        .modal-content {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
        }
        
        .form-control, .form-select {
            background: var(--card-bg);
            border-color: var(--card-border);
            color: var(--text-primary);
        }
        
        .form-control:focus, .form-select:focus {
            background: var(--card-bg);
            border-color: var(--primary-color);
            color: var(--text-primary);
        }
        
        @media (max-width: 992px) { .sidebar { min-height: auto; } }
    </style>
    
    {{codeBeforHead}}
</head>
<body>
    <nav class="navbar navbar-dark navbar-admin navbar-expand-lg">
        <div class="container-fluid px-4">
            <span class="navbar-brand d-flex align-items-center gap-2">
                <i class="fa-solid fa-users"></i> Admin Users
            </span>
            <div class="d-flex align-items-center gap-2">
                <a href="/admin/" class="nav-link"><i class="fa-solid fa-arrow-left me-1"></i> Back</a>
                <a href="/" class="nav-link"><i class="fa-solid fa-eye me-1"></i> View Blog</a>
                <button class="theme-toggle" onclick="toggleTheme()">
                    <i class="fa-solid fa-moon" id="theme-icon"></i>
                </button>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 col-md-3 sidebar p-0">
                <div class="sidebar-brand d-none d-md-block">
                    <i class="fa-solid fa-shield-halved me-2"></i>Admin Panel
                </div>
                <div class="p-3">
                    <nav class="nav flex-column">
                        <a class="nav-link" href="/admin/"><i class="fa-solid fa-newspaper"></i><span>Articles</span></a>
                        <a class="nav-link active" href="/admin/users"><i class="fa-solid fa-users"></i><span>Users</span></a>
                        <a class="nav-link" href="/admin/edit"><i class="fa-solid fa-circle-plus"></i><span>New Article</span></a>
                    </nav>
                </div>
            </div>
            
            <div class="col-lg-10 col-md-9 py-4 px-4">
                <div class="row g-3 mb-4">
                    <div class="col-xl-3 col-md-6">
                        <div class="card stats-card h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="user-avatar admin-avatar"><i class="fa-solid fa-user-plus"></i></div>
                                    <div class="ms-3">
                                        <h6 class="mb-1">Add Admin</h6>
                                        <button onclick="openAddAdminModal()" class="btn btn-primary btn-sm">
                                            <i class="fa-solid fa-plus me-1"></i> Add User
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card stats-card h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="user-avatar admin-avatar"><i class="fa-solid fa-users"></i></div>
                                    <div class="ms-3">
                                        <h6 class="mb-0" id="total-admins">Loading...</h6>
                                        <small class="text-muted">Total Admins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card stats-card h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="user-avatar superadmin-avatar"><i class="fa-solid fa-shield-halved"></i></div>
                                    <div class="ms-3">
                                        <h6 class="mb-0" id="superadmin-count">Loading...</h6>
                                        <small class="text-muted">Super Admins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card stats-card h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="user-avatar admin-avatar"><i class="fa-solid fa-user-check"></i></div>
                                    <div class="ms-3">
                                        <h6 class="mb-0" id="active-admins">Loading...</h6>
                                        <small class="text-muted">Active Users</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 class="mb-0"><i class="fa-solid fa-users-gear me-2" style="color: var(--primary-color);"></i>Admin Users</h4>
                            <button onclick="loadAdmins()" class="btn btn-outline-secondary btn-sm">
                                <i class="fa-solid fa-rotate"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="admins-list">
                            <div class="text-center py-5">
                                <div class="spinner-border text-primary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add Admin Modal -->
    <div class="modal fade" id="addAdminModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa-solid fa-user-plus me-2"></i>Add New Admin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="add-admin-form">
                        <div class="mb-3">
                            <label class="form-label">Username *</label>
                            <input type="text" id="username" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password *</label>
                            <input type="password" id="password" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email *</label>
                            <input type="email" id="email" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Role *</label>
                            <select id="role" class="form-select" required>
                                <option value="admin">Admin</option>
                                <option value="superadmin">Super Admin</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" onclick="addAdmin()">
                        <i class="fa-solid fa-user-plus me-1"></i> Add Admin
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Admin Modal -->
    <div class="modal fade" id="editAdminModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa-solid fa-user-pen me-2"></i>Edit Admin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="edit-admin-form">
                        <input type="hidden" id="edit-admin-id">
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input type="text" id="edit-username" class="form-control" readonly>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email *</label>
                            <input type="email" id="edit-email" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Role *</label>
                            <select id="edit-role" class="form-select" required>
                                <option value="admin">Admin</option>
                                <option value="superadmin">Super Admin</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status *</label>
                            <select id="edit-status" class="form-select" required>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" onclick="updateAdmin()">
                        <i class="fa-solid fa-check me-1"></i> Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Theme Toggle
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            const icon = document.getElementById('theme-icon');
            if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        }
        
        setTheme(getPreferredTheme());

        let currentAdmins = [];

        document.addEventListener('DOMContentLoaded', loadAdmins);

        async function loadAdmins() {
            try {
                const response = await fetch('/api/admins');
                if (!response.ok) {
                    if (response.status === 401 || response.status === 403) {
                        showAlert('Access denied', 'danger');
                        return;
                    }
                    throw new Error('Failed to load admins');
                }
                currentAdmins = await response.json();
                displayAdmins(currentAdmins);
                updateStats();
            } catch (error) {
                showAlert('Error loading admins', 'danger');
            }
        }

        function displayAdmins(admins) {
            const container = document.getElementById('admins-list');
            if (admins.length === 0) {
                container.innerHTML = '<div class="text-center py-5"><i class="fa-solid fa-users fa-3x text-muted mb-3"></i><h5 class="text-muted">No Admin Users</h5></div>';
                return;
            }

            container.innerHTML = \`
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Joined</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            \${admins.map(admin => \`
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="user-avatar \${admin.role === 'superadmin' ? 'superadmin-avatar' : 'admin-avatar'} me-3">
                                                \${admin.username.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <strong>\${admin.username}</strong>
                                                <br><small class="text-muted">\${admin.email}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge \${admin.role === 'superadmin' ? 'badge-superadmin' : 'badge-admin'} text-white">
                                            <i class="fa-solid fa-\${admin.role === 'superadmin' ? 'shield-halved' : 'user-check'} me-1"></i>\${admin.role}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="badge \${admin.status === 'active' ? 'bg-success' : 'bg-secondary'}">
                                            <i class="fa-solid fa-\${admin.status === 'active' ? 'circle-check' : 'circle-xmark'} me-1"></i>\${admin.status}
                                        </span>
                                    </td>
                                    <td><small>\${new Date(admin.createdAt).toLocaleDateString()}</small></td>
                                    <td>
                                        <div class="btn-group btn-group-sm">
                                            <button onclick="editAdmin('\${admin.id}')" class="btn btn-outline-primary"><i class="fa-solid fa-pen"></i></button>
                                            <button onclick="deleteAdmin('\${admin.id}', '\${admin.username}')" class="btn btn-outline-danger" \${admin.role === 'superadmin' ? 'disabled' : ''}><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            \`).join('')}
                        </tbody>
                    </table>
                </div>
            \`;
        }

        function updateStats() {
            document.getElementById('total-admins').textContent = currentAdmins.length;
            document.getElementById('superadmin-count').textContent = currentAdmins.filter(a => a.role === 'superadmin').length;
            document.getElementById('active-admins').textContent = currentAdmins.filter(a => a.status === 'active').length;
        }

        function openAddAdminModal() {
            document.getElementById('add-admin-form').reset();
            new bootstrap.Modal(document.getElementById('addAdminModal')).show();
        }

        async function addAdmin() {
            const formData = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
                role: document.getElementById('role').value,
            };

            try {
                const response = await fetch('/api/admins', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    showAlert('Admin created successfully', 'success');
                    bootstrap.Modal.getInstance(document.getElementById('addAdminModal')).hide();
                    loadAdmins();
                } else {
                    throw new Error(await response.text());
                }
            } catch (error) {
                showAlert('Error creating admin: ' + error.message, 'danger');
            }
        }

        function editAdmin(adminId) {
            const admin = currentAdmins.find(a => a.id === adminId);
            if (!admin) return;

            document.getElementById('edit-admin-id').value = admin.id;
            document.getElementById('edit-username').value = admin.username;
            document.getElementById('edit-email').value = admin.email;
            document.getElementById('edit-role').value = admin.role;
            document.getElementById('edit-status').value = admin.status;

            new bootstrap.Modal(document.getElementById('editAdminModal')).show();
        }

        async function updateAdmin() {
            const adminId = document.getElementById('edit-admin-id').value;
            const updateData = {
                email: document.getElementById('edit-email').value,
                role: document.getElementById('edit-role').value,
                status: document.getElementById('edit-status').value,
            };

            try {
                const response = await fetch('/api/admins/' + adminId, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updateData),
                });

                if (response.ok) {
                    showAlert('Admin updated successfully', 'success');
                    bootstrap.Modal.getInstance(document.getElementById('editAdminModal')).hide();
                    loadAdmins();
                } else {
                    throw new Error(await response.text());
                }
            } catch (error) {
                showAlert('Error updating admin: ' + error.message, 'danger');
            }
        }

        async function deleteAdmin(adminId, username) {
            if (!confirm(\`Delete admin "\${username}"?\`)) return;

            try {
                const response = await fetch('/api/admins/' + adminId, { method: 'DELETE' });
                if (response.ok) {
                    showAlert('Admin deleted', 'success');
                    loadAdmins();
                } else {
                    throw new Error(await response.text());
                }
            } catch (error) {
                showAlert('Error deleting admin: ' + error.message, 'danger');
            }
        }

        function showAlert(message, type) {
            document.querySelectorAll('.alert').forEach(a => a.remove());
            
            const alert = document.createElement('div');
            alert.className = \`alert alert-\${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3 shadow\`;
            alert.style.zIndex = '1100';
            alert.innerHTML = \`<i class="fa-solid fa-\${type === 'success' ? 'circle-check' : 'triangle-exclamation'} me-2"></i>\${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>\`;
            
            document.body.appendChild(alert);
            setTimeout(() => alert.remove(), 5000);
        }
    </script>
    
    {{codeBeforBody}}
</body>
</html>
`,
    "admin": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - {{siteName}}</title>
    
    <!-- Bootstrap 5.3.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6.5.1 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* CSS Variables for Light/Dark Themes */
        :root {
            --primary-color: #6366f1;
            --secondary-color: #8b5cf6;
            --accent-color: #06b6d4;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            
            --primary-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
            --border-radius: 16px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            
            /* Light mode colors */
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --card-border: #e5e7eb;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --sidebar-bg: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%);
            --navbar-bg: #1e293b;
            --table-hover: #f8fafc;
        }
        
        [data-bs-theme="dark"] {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --card-border: #334155;
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            --sidebar-bg: linear-gradient(180deg, #312e81 0%, #4c1d95 100%);
            --navbar-bg: #0f172a;
            --table-hover: #334155;
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
        }
        
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
        }
        
        /* Sidebar Styling */
        .sidebar {
            background: var(--sidebar-bg);
            color: white;
            min-height: calc(100vh - 60px);
            box-shadow: var(--shadow-lg);
        }
        
        .sidebar .nav-link {
            color: rgba(255, 255, 255, 0.85);
            padding: 0.875rem 1.25rem;
            margin: 0.25rem 0.5rem;
            border-radius: 12px;
            transition: var(--transition);
            font-weight: 500;
            font-size: 0.9375rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .sidebar .nav-link:hover,
        .sidebar .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            transform: translateX(6px);
        }
        
        .sidebar .nav-link i {
            font-size: 1.1rem;
            width: 24px;
            text-align: center;
        }
        
        .sidebar-brand {
            padding: 1.5rem;
            font-weight: 700;
            font-size: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            margin-bottom: 1rem;
        }
        
        /* Card Styling */
        .card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }
        
        .card:hover {
            box-shadow: var(--shadow-md);
        }
        
        .card-header {
            background: transparent;
            border-bottom: 1px solid var(--card-border);
            padding: 1.25rem 1.5rem;
        }
        
        .card-body {
            padding: 1.5rem;
        }
        
        /* Navbar */
        .navbar-admin {
            background: var(--navbar-bg) !important;
            padding: 0.75rem 0;
            box-shadow: var(--shadow-sm);
        }
        
        /* Theme Toggle */
        .theme-toggle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: transparent;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .theme-toggle:hover {
            transform: rotate(180deg);
            border-color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.1);
        }
        
        /* Tabs */
        .nav-tabs {
            border-bottom: 2px solid var(--card-border);
            gap: 0.5rem;
        }
        
        .nav-tabs .nav-link {
            border: none;
            border-bottom: 3px solid transparent;
            padding: 0.875rem 1.5rem;
            font-weight: 600;
            color: var(--text-secondary);
            transition: var(--transition);
            margin-bottom: -2px;
            border-radius: 0;
        }
        
        .nav-tabs .nav-link:hover {
            color: var(--primary-color);
            border-bottom-color: transparent;
        }
        
        .nav-tabs .nav-link.active {
            color: var(--primary-color);
            border-bottom-color: var(--primary-color);
            background: transparent;
        }
        
        /* Table */
        .table {
            margin-bottom: 0;
            color: var(--text-primary);
        }
        
        .table th {
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.75px;
            color: var(--text-muted);
            padding: 1rem;
            border-bottom: 2px solid var(--card-border);
            background: transparent;
        }
        
        .table td {
            padding: 1rem;
            vertical-align: middle;
            border-color: var(--card-border);
        }
        
        .table tbody tr {
            transition: var(--transition);
        }
        
        .table tbody tr:hover {
            background-color: var(--table-hover);
        }
        
        [data-bs-theme="dark"] .table-light {
            --bs-table-bg: var(--card-bg);
            --bs-table-border-color: var(--card-border);
        }
        
        /* Buttons */
        .btn-primary {
            background: var(--primary-gradient);
            border: none;
            padding: 0.625rem 1.25rem;
            font-weight: 500;
            border-radius: 10px;
            transition: var(--transition);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }
        
        .btn-outline-primary,
        .btn-outline-danger,
        .btn-outline-success,
        .btn-outline-secondary {
            border-radius: 10px;
            transition: var(--transition);
        }
        
        .btn-group-sm .btn {
            padding: 0.4rem 0.6rem;
            border-radius: 8px;
        }
        
        /* Badges */
        .badge {
            padding: 0.4rem 0.75rem;
            font-weight: 500;
            font-size: 0.75rem;
            border-radius: 8px;
        }
        
        .draft-row {
            background-color: rgba(245, 158, 11, 0.1);
        }
        
        [data-bs-theme="dark"] .draft-row {
            background-color: rgba(245, 158, 11, 0.15);
        }
        
        .badge-draft {
            background: linear-gradient(135deg, #f59e0b, #d97706);
        }
        
        /* Tool Cards */
        .tool-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
            padding: 1.75rem;
            text-align: center;
            transition: var(--transition);
            height: 100%;
        }
        
        .tool-card:hover {
            border-color: var(--primary-color);
            box-shadow: var(--shadow-md);
            transform: translateY(-4px);
        }
        
        .tool-card .icon-wrapper {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
        }
        
        .tool-card h6 {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }
        
        .tool-card p {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        /* SEO Links */
        .seo-link {
            display: flex;
            align-items: center;
            padding: 1.25rem;
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
            transition: var(--transition);
            background: var(--card-bg);
        }
        
        .seo-link:hover {
            border-color: var(--primary-color);
            box-shadow: var(--shadow-sm);
            transform: translateY(-2px);
        }
        
        /* Modal Styling */
        .modal-content {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
        }
        
        .modal-header, .modal-footer {
            border-color: var(--card-border);
        }
        
        .form-control, .form-select {
            background: var(--card-bg);
            border-color: var(--card-border);
            color: var(--text-primary);
        }
        
        .form-control:focus, .form-select:focus {
            background: var(--card-bg);
            border-color: var(--primary-color);
            color: var(--text-primary);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
            animation: fadeIn 0.4s ease-out;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .sidebar {
                min-height: auto;
                padding: 1rem 0;
            }
        }
        
        @media (max-width: 768px) {
            .sidebar {
                min-height: auto;
            }
            
            .btn-group-sm .btn {
                padding: 0.375rem 0.5rem;
            }
            
            .card-header {
                padding: 1rem 1.25rem;
            }
            
            .card-body {
                padding: 1.25rem;
            }
            
            .nav-tabs .nav-link {
                padding: 0.625rem 1rem;
                font-size: 0.875rem;
            }
        }
        
        @media (max-width: 576px) {
            .table-responsive {
                font-size: 0.85rem;
            }
            
            .card-body {
                padding: 1rem;
            }
            
            .table th, .table td {
                padding: 0.75rem 0.5rem;
            }
            
            .tool-card {
                padding: 1.25rem;
            }
        }
    </style>
    
    {{codeBeforHead}}
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-dark navbar-admin navbar-expand-lg">
        <div class="container-fluid px-4">
            <span class="navbar-brand d-flex align-items-center gap-2">
                <i class="fa-solid fa-gauge-high"></i>
                <span>Blog Admin</span>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav ms-auto align-items-center gap-2">
                    <a href="/" class="nav-link">
                        <i class="fa-solid fa-eye me-1"></i> View Blog
                    </a>
                    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark/light mode">
                        <i class="fa-solid fa-moon" id="theme-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-lg-2 col-md-3 sidebar p-0">
                <div class="sidebar-brand d-none d-md-block">
                    <i class="fa-solid fa-shield-halved me-2"></i>Admin Panel
                </div>
                <div class="p-2 p-lg-3">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#articles" data-bs-toggle="tab">
                                <i class="fa-solid fa-newspaper"></i>
                                <span>Articles</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/users">
                                <i class="fa-solid fa-users"></i>
                                <span>Users</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tools" data-bs-toggle="tab">
                                <i class="fa-solid fa-toolbox"></i>
                                <span>Tools</span>
                            </a>
                        </li>
                        <li class="nav-item mt-3">
                            <a class="nav-link" href="/admin/edit">
                                <i class="fa-solid fa-circle-plus"></i>
                                <span>New Article</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Main Content -->
            <div class="col-lg-10 col-md-9 py-4 px-4">
                <div class="tab-content">
                    <!-- Articles Tab -->
                    <div class="tab-pane fade show active" id="articles">
                        <div class="card fade-in">
                            <div class="card-header">
                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                                    <h4 class="mb-0 d-flex align-items-center gap-2">
                                        <i class="fa-solid fa-file-lines" style="color: var(--primary-color);"></i>
                                        Articles
                                    </h4>
                                    <a href="/admin/edit" class="btn btn-primary">
                                        <i class="fa-solid fa-plus me-2"></i>New Article
                                    </a>
                                </div>
                            </div>
                            <div class="card-body">
                                <!-- Tabs -->
                                <ul class="nav nav-tabs mb-4" id="articlesTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="published-tab" data-bs-toggle="tab" data-bs-target="#published" type="button" role="tab">
                                            <i class="fa-solid fa-check-circle me-1"></i>Published
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="drafts-tab" data-bs-toggle="tab" data-bs-target="#drafts" type="button" role="tab">
                                            <i class="fa-solid fa-file-pen me-1"></i>Drafts
                                        </button>
                                    </li>
                                </ul>
                                
                                <!-- Tab Content -->
                                <div class="tab-content" id="articlesTabContent">
                                    <!-- Published Articles -->
                                    <div class="tab-pane fade show active" id="published" role="tabpanel">
                                        <div id="published-list">
                                            <div class="text-center py-5">
                                                <div class="spinner-border text-primary" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Drafts -->
                                    <div class="tab-pane fade" id="drafts" role="tabpanel">
                                        <div id="drafts-list">
                                            <div class="text-center py-5">
                                                <div class="spinner-border text-primary" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tools Tab -->
                    <div class="tab-pane fade" id="tools">
                        <div class="row g-4 fade-in">
                            <!-- Export/Import Cards -->
                            <div class="col-xl-6 col-lg-12">
                                <div class="card h-100">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0 d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-database" style="color: var(--primary-color);"></i>
                                            Data Management
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="tool-card">
                                                    <div class="icon-wrapper" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.2));">
                                                        <i class="fa-solid fa-download" style="color: #10b981;"></i>
                                                    </div>
                                                    <h6>Export Articles</h6>
                                                    <p>Download all articles as JSON backup</p>
                                                    <button onclick="exportArticles()" class="btn btn-success btn-sm w-100">
                                                        <i class="fa-solid fa-cloud-arrow-down me-2"></i>Export
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="tool-card">
                                                    <div class="icon-wrapper" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(99, 102, 241, 0.2));">
                                                        <i class="fa-solid fa-upload" style="color: #6366f1;"></i>
                                                    </div>
                                                    <h6>Import Articles</h6>
                                                    <p>Upload JSON file to restore articles</p>
                                                    <button onclick="openImportModal()" class="btn btn-primary btn-sm w-100">
                                                        <i class="fa-solid fa-cloud-arrow-up me-2"></i>Import
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="tool-card">
                                                    <div class="icon-wrapper" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.2));">
                                                        <i class="fa-solid fa-key" style="color: #f59e0b;"></i>
                                                    </div>
                                                    <h6>Change Password</h6>
                                                    <p>Update your admin account password</p>
                                                    <button onclick="openChangePasswordModal()" class="btn btn-warning btn-sm w-100">
                                                        <i class="fa-solid fa-lock me-2"></i>Change Password
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- System Tools -->
                            <div class="col-xl-6 col-lg-12">
                                <div class="card h-100">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0 d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-screwdriver-wrench" style="color: var(--warning-color);"></i>
                                            System Tools
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="tool-card">
                                                    <div class="icon-wrapper" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.2));">
                                                        <i class="fa-solid fa-bug" style="color: #f59e0b;"></i>
                                                    </div>
                                                    <h6>Debug Info</h6>
                                                    <p>View system information and diagnostics</p>
                                                    <button onclick="showDebugInfo()" class="btn btn-warning btn-sm w-100">
                                                        <i class="fa-solid fa-terminal me-2"></i>Debug
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="tool-card">
                                                    <div class="icon-wrapper" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.2));">
                                                        <i class="fa-solid fa-hammer" style="color: #ef4444;"></i>
                                                    </div>
                                                    <h6>Fix Articles</h6>
                                                    <p>Repair missing or corrupted articles</p>
                                                    <button onclick="fixMissingArticles()" class="btn btn-danger btn-sm w-100">
                                                        <i class="fa-solid fa-wrench me-2"></i>Fix
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SEO Tools -->
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0 d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-chart-line" style="color: var(--accent-color);"></i>
                                            SEO & Feeds
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="seo-link">
                                                    <div class="icon-wrapper me-3" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.2)); width: 56px; height: 56px; flex-shrink: 0;">
                                                        <i class="fa-solid fa-rss" style="color: #06b6d4;"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="mb-1">RSS Feed</h6>
                                                        <p class="text-muted small mb-2">Subscribe to your content</p>
                                                        <a href="/rss.xml" target="_blank" class="btn btn-outline-info btn-sm">
                                                            <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Open RSS
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="seo-link">
                                                    <div class="icon-wrapper me-3" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.2)); width: 56px; height: 56px; flex-shrink: 0;">
                                                        <i class="fa-solid fa-sitemap" style="color: #10b981;"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="mb-1">Sitemap</h6>
                                                        <p class="text-muted small mb-2">Search engine optimization</p>
                                                        <a href="/sitemap.xml" target="_blank" class="btn btn-outline-success btn-sm">
                                                            <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Open Sitemap
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Import Modal -->
    <div class="modal fade" id="importModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-flex align-items-center gap-2">
                        <i class="fa-solid fa-file-import" style="color: var(--primary-color);"></i>
                        Import Articles
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Select JSON File</label>
                        <input type="file" id="importFile" accept=".json" class="form-control">
                        <div class="form-text">Choose a JSON file previously exported from this blog</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark me-1"></i>Cancel
                    </button>
                    <button type="button" class="btn btn-primary" onclick="importArticles()">
                        <i class="fa-solid fa-file-import me-1"></i>Import
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Change Password Modal -->
    <div class="modal fade" id="changePasswordModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-flex align-items-center gap-2">
                        <i class="fa-solid fa-key" style="color: var(--warning-color);"></i>
                        Change Password
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Current Password</label>
                        <input type="password" id="cp-current" class="form-control" placeholder="Enter current password">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold">New Password</label>
                        <input type="password" id="cp-new" class="form-control" placeholder="Enter new password (min. 6 chars)">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Confirm New Password</label>
                        <input type="password" id="cp-confirm" class="form-control" placeholder="Confirm new password">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark me-1"></i>Cancel
                    </button>
                    <button type="button" class="btn btn-warning" onclick="changePassword()">
                        <i class="fa-solid fa-lock me-1"></i>Change Password
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Theme Toggle Functionality
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        }
        
        function updateThemeIcon(theme) {
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        }
        
        // Initialize theme on load
        setTheme(getPreferredTheme());

        // Article Management Functions
        async function loadArticles() {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) throw new Error('Failed to load articles');
                const articles = await response.json();
                const container = document.getElementById('published-list');
                
                if (articles.length === 0) {
                    container.innerHTML = \`
                        <div class="text-center py-5 fade-in">
                            <i class="fa-solid fa-inbox fa-4x text-muted mb-4"></i>
                            <h5 class="text-muted mb-3">No published articles yet</h5>
                            <p class="text-muted mb-4">Create your first article to get started</p>
                            <a href="/admin/edit" class="btn btn-primary">
                                <i class="fa-solid fa-plus me-2"></i>Create Article
                            </a>
                        </div>
                    \`;
                    return;
                }

                container.innerHTML = \`
                    <div class="table-responsive fade-in">
                        <table class="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th><i class="fa-solid fa-heading me-2"></i>Title</th>
                                    <th><i class="fa-solid fa-tag me-2"></i>Label</th>
                                    <th><i class="fa-regular fa-calendar me-2"></i>Date</th>
                                    <th width="120"><i class="fa-solid fa-gear me-2"></i>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                \${articles.map(article => \`
                                    <tr>
                                        <td>
                                            <strong style="color: var(--text-primary);">\${article.title}</strong>
                                            <br><small class="text-muted"><i class="fa-solid fa-link me-1"></i>/\${article.permalink}</small>
                                        </td>
                                        <td><span class="badge bg-primary">\${article.label}</span></td>
                                        <td style="color: var(--text-secondary);">\${new Date(article.createDate).toLocaleDateString()}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <a href="/admin/edit?permalink=\${article.permalink}" class="btn btn-outline-primary" title="Edit">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </a>
                                                <a href="/article/\${article.permalink}" target="_blank" class="btn btn-outline-secondary" title="View">
                                                    <i class="fa-solid fa-eye"></i>
                                                </a>
                                                <button onclick="deleteArticle('\${article.permalink}')" class="btn btn-outline-danger" title="Delete">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                \`).join('')}
                            </tbody>
                        </table>
                    </div>
                \`;
            } catch (error) {
                console.error('Error loading articles:', error);
                showAlert('Error loading articles', 'danger');
            }
        }

        async function loadDrafts() {
            try {
                const response = await fetch('/api/articles?drafts=true');
                if (!response.ok) throw new Error('Failed to load drafts');
                const drafts = await response.json();
                const container = document.getElementById('drafts-list');
                
                if (drafts.length === 0) {
                    container.innerHTML = \`
                        <div class="text-center py-5 fade-in">
                            <i class="fa-solid fa-file-pen fa-4x text-muted mb-4"></i>
                            <h5 class="text-muted mb-3">No drafts yet</h5>
                            <p class="text-muted">Save articles as drafts to see them here</p>
                        </div>
                    \`;
                    return;
                }

                container.innerHTML = \`
                    <div class="table-responsive fade-in">
                        <table class="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th><i class="fa-solid fa-heading me-2"></i>Title</th>
                                    <th><i class="fa-solid fa-tag me-2"></i>Label</th>
                                    <th><i class="fa-regular fa-calendar me-2"></i>Last Modified</th>
                                    <th width="160"><i class="fa-solid fa-gear me-2"></i>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                \${drafts.map(draft => \`
                                    <tr class="draft-row">
                                        <td>
                                            <div class="d-flex align-items-center gap-2 mb-1">
                                                <span class="badge badge-draft text-white">
                                                    <i class="fa-solid fa-file-pen me-1"></i>Draft
                                                </span>
                                            </div>
                                            <strong style="color: var(--text-primary);">\${draft.title}</strong>
                                            <br><small class="text-muted"><i class="fa-solid fa-link me-1"></i>/\${draft.permalink}</small>
                                        </td>
                                        <td><span class="badge bg-primary">\${draft.label}</span></td>
                                        <td style="color: var(--text-secondary);">\${new Date(draft.createDate).toLocaleDateString()}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <a href="/admin/edit?permalink=\${draft.permalink}" class="btn btn-outline-primary" title="Edit">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </a>
                                                <button onclick="publishDraft('\${draft.permalink}')" class="btn btn-outline-success" title="Publish">
                                                    <i class="fa-solid fa-paper-plane"></i>
                                                </button>
                                                <button onclick="deleteArticle('\${draft.permalink}')" class="btn btn-outline-danger" title="Delete">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                \`).join('')}
                            </tbody>
                        </table>
                    </div>
                \`;
            } catch (error) {
                console.error('Error loading drafts:', error);
                showAlert('Error loading drafts', 'danger');
            }
        }

        async function deleteArticle(permalink) {
            if (!confirm('Are you sure you want to delete this article? This action cannot be undone.')) return;
            
            try {
                const response = await fetch('/api/articles/' + permalink, { method: 'DELETE' });
                if (response.ok) {
                    showAlert('Article deleted successfully', 'success');
                    loadArticles();
                    loadDrafts();
                } else {
                    throw new Error('Delete failed');
                }
            } catch (error) {
                showAlert('Error deleting article', 'danger');
            }
        }

        async function publishDraft(permalink) {
            try {
                const response = await fetch('/api/articles/' + permalink);
                if (!response.ok) throw new Error('Draft not found');
                
                const draft = await response.json();
                draft.status = 'published';
                
                const updateResponse = await fetch('/api/articles/' + permalink, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(draft)
                });
                
                if (updateResponse.ok) {
                    showAlert('Draft published successfully!', 'success');
                    loadDrafts();
                    loadArticles();
                } else {
                    throw new Error('Publish failed');
                }
            } catch (error) {
                showAlert('Error publishing draft', 'danger');
            }
        }

        // Tools Functions
        async function exportArticles() {
            try {
                const response = await fetch('/api/export');
                if (!response.ok) throw new Error('Export failed');
                
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = \`blog-export-\${new Date().toISOString().split('T')[0]}.json\`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                
                showAlert('Articles exported successfully!', 'success');
            } catch (error) {
                showAlert('Error exporting articles', 'danger');
            }
        }

        function openImportModal() {
            const modal = new bootstrap.Modal(document.getElementById('importModal'));
            modal.show();
        }

        async function importArticles() {
            const fileInput = document.getElementById('importFile');
            const file = fileInput.files[0];
            
            if (!file) {
                showAlert('Please select a file', 'warning');
                return;
            }
            
            try {
                const text = await file.text();
                const articles = JSON.parse(text);
                
                if (!Array.isArray(articles)) {
                    throw new Error('Invalid file format');
                }
                
                const response = await fetch('/api/import', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: text
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    showAlert(\`Successfully imported \${result.imported} articles!\`, 'success');
                    bootstrap.Modal.getInstance(document.getElementById('importModal')).hide();
                    loadArticles();
                } else {
                    throw new Error(result.error || 'Import failed');
                }
            } catch (error) {
                showAlert('Error importing articles: ' + error.message, 'danger');
            }
        }

        async function showDebugInfo() {
            try {
                const response = await fetch('/api/debug');
                const data = await response.json();
                
                const debugInfo = \`
📊 Debug Information
━━━━━━━━━━━━━━━━━━━━━━━━
Total Articles: \${data.total}
Published: \${data.allArticles.filter(a => a.exists && a.index.status !== 'draft').length}
Drafts: \${data.allArticles.filter(a => a.exists && a.index.status === 'draft').length}
Missing Data: \${data.allArticles.filter(a => !a.exists).length}
System Index: \${data.systemIndexNum}
━━━━━━━━━━━━━━━━━━━━━━━━
                \`.trim();
                
                alert(debugInfo);
            } catch (error) {
                showAlert('Error loading debug information', 'danger');
            }
        }

        async function fixMissingArticles() {
            if (!confirm('This will attempt to fix any missing article data. Continue?')) return;
            
            try {
                const response = await fetch('/api/fix-missing-articles', { method: 'POST' });
                const result = await response.json();
                
                if (response.ok) {
                    showAlert(\`Fixed \${result.fixedCount} missing articles\`, 'success');
                    loadArticles();
                    loadDrafts();
                } else {
                    throw new Error(result.error);
                }
            } catch (error) {
                showAlert('Error fixing articles: ' + error.message, 'danger');
            }
        }

        // Utility Functions
        function showAlert(message, type) {
            const iconMap = {
                success: 'fa-solid fa-circle-check',
                warning: 'fa-solid fa-triangle-exclamation',
                info: 'fa-solid fa-circle-info',
                danger: 'fa-solid fa-circle-xmark'
            };
            
            // Remove existing alerts
            document.querySelectorAll('.alert').forEach(alert => alert.remove());
            
            const alert = document.createElement('div');
            alert.className = \`alert alert-\${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3 shadow-lg\`;
            alert.style.zIndex = '1100';
            alert.style.minWidth = '300px';
            alert.innerHTML = \`
                <i class="\${iconMap[type] || iconMap.info} me-2"></i>
                \${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            \`;
            
            document.body.appendChild(alert);
            
            setTimeout(() => {
                if (alert.parentNode) {
                    alert.classList.remove('show');
                    setTimeout(() => alert.remove(), 150);
                }
            }, 5000);
        }

        function openChangePasswordModal() {
            document.getElementById('cp-current').value = '';
            document.getElementById('cp-new').value = '';
            document.getElementById('cp-confirm').value = '';
            new bootstrap.Modal(document.getElementById('changePasswordModal')).show();
        }

        async function changePassword() {
            const currentPassword = document.getElementById('cp-current').value;
            const newPassword = document.getElementById('cp-new').value;
            const confirmPassword = document.getElementById('cp-confirm').value;

            if (!currentPassword || !newPassword || !confirmPassword) {
                showAlert('Please fill in all fields', 'warning');
                return;
            }

            if (newPassword !== confirmPassword) {
                showAlert('New passwords do not match', 'danger');
                return;
            }

            if (newPassword.length < 6) {
                showAlert('New password must be at least 6 characters', 'warning');
                return;
            }

            try {
                const response = await fetch('/api/admins/change-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ currentPassword, newPassword })
                });

                const result = await response.json();

                if (response.ok) {
                    bootstrap.Modal.getInstance(document.getElementById('changePasswordModal')).hide();
                    showAlert('Password changed successfully. Please re-login.', 'success');
                } else {
                    showAlert(result.error || 'Failed to change password', 'danger');
                }
            } catch (error) {
                showAlert('Error changing password', 'danger');
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Load articles when tab is shown
            document.getElementById('published-tab').addEventListener('shown.bs.tab', loadArticles);
            document.getElementById('drafts-tab').addEventListener('shown.bs.tab', loadDrafts);

            // Load published articles by default
            loadArticles();
        });
    </script>
    
    {{codeBeforBody}}
</body>
</html>
`,
    "article": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}} - {{siteName}}</title>
    
    <!-- Bootstrap 5.3.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6.5.1 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Marked.js for Markdown parsing -->
    <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
    <!-- Highlight.js for syntax highlighting - using a theme that works for both light/dark modes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css" id="hljs-theme">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    
    <style>
        /* CSS Variables for Light/Dark Themes */
        :root {
            --primary-color: #4f46e5;
            --primary-light: #818cf8;
            --secondary-color: #7c3aed;
            --accent-color: #0ea5e9;
            
            /* Light mode colors */
            --bg-primary: #f8fafc;
            --card-bg: #ffffff;
            --card-border: #e2e8f0;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --text-muted: #94a3b8;
            --navbar-bg: rgba(255, 255, 255, 0.9);
            --footer-bg: #0f172a;
            --code-bg: #f1f5f9;
            --pre-bg: #1e293b;
            --blockquote-bg: #f8fafc;
        }
        
        [data-bs-theme="dark"] {
            --bg-primary: #0f172a;
            --card-bg: #1e293b;
            --card-border: #334155;
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --text-muted: #64748b;
            --navbar-bg: rgba(15, 23, 42, 0.95);
            --footer-bg: #020617;
            --code-bg: #334155;
            --pre-bg: #0f172a;
            --blockquote-bg: #1e293b;
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            min-height: 100vh;
            color: var(--text-primary);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .glass-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }
        
        .navbar-glass {
            background: var(--navbar-bg) !important;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--card-border);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        /* Theme Toggle */
        .theme-toggle {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            border: 1px solid var(--card-border);
            background: var(--card-bg);
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .theme-toggle:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
        
        /* Article Content */
        .article-content {
            line-height: 1.85;
            font-size: 1.05rem;
            color: var(--text-secondary);
        }
        
        .article-content img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin: 1.5rem 0;
        }
        
        .article-content h1 {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-primary);
            margin: 2rem 0 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--primary-color);
        }
        
        .article-content h2 {
            font-size: 1.6rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 1.75rem 0 1rem;
            padding-left: 1rem;
            border-left: 3px solid var(--primary-color);
        }
        
        .article-content h3 {
            font-size: 1.35rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 1.5rem 0 0.75rem;
        }
        
        .article-content h4 {
            font-size: 1.15rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 1.25rem 0 0.6rem;
        }
        
        .article-content p {
            margin-bottom: 1.25rem;
        }
        
        .article-content blockquote {
            border-left: 3px solid var(--primary-color);
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            background: var(--blockquote-bg);
            border-radius: 0 10px 10px 0;
        }
        
        .article-content code {
            background: var(--code-bg);
            padding: 0.2rem 0.5rem;
            border-radius: 6px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9em;
            color: #dc2626;
        }
        
        [data-bs-theme="dark"] .article-content code {
            color: #fb7185;
        }
        
        .article-content pre {
            background: var(--pre-bg);
            color: #f9fafb;
            padding: 1.25rem;
            border-radius: 12px;
            overflow-x: auto;
            margin: 1.25rem 0;
            font-size: 0.9rem;
            border: 1px solid var(--card-border);
        }
        
        .article-content pre code {
            background: none;
            color: inherit;
            padding: 0;
            font-size: 0.9rem;
        }
        
        .article-content ul, .article-content ol {
            padding-left: 1.75rem;
            margin: 1rem 0;
        }
        
        .article-content li {
            margin: 0.4rem 0;
        }
        
        .article-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            font-size: 0.95rem;
        }
        
        .article-content table th,
        .article-content table td {
            padding: 0.75rem;
            border: 1px solid var(--card-border);
            text-align: left;
        }
        
        .article-content table th {
            background: var(--code-bg);
            font-weight: 600;
        }
        
        .article-content a {
            color: var(--primary-color);
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: all 0.2s ease;
        }
        
        .article-content a:hover {
            border-bottom-color: var(--primary-color);
        }
        
        /* Tag Badge */
        .tag-badge {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            font-size: 0.8rem;
            padding: 0.4rem 1rem;
            border-radius: 8px;
            font-weight: 600;
        }
        
        /* Gradient Text */
        .gradient-text {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        /* Footer */
        .footer {
            background: var(--footer-bg);
            color: #94a3b8;
            padding: 24px 0;
            margin-top: 40px;
            font-size: 0.9rem;
        }
        
        #raw-content {
            display: none;
        }
        
        /* Share Buttons */
        .share-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .share-btn {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            transition: all 0.2s ease;
            font-size: 1rem;
        }
        
        .share-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .btn-twitter { background: #1da1f2; color: white; }
        .btn-facebook { background: #1877f2; color: white; }
        .btn-linkedin { background: #0a66c2; color: white; }
        .btn-copy { background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; }
        
        /* Article Header */
        .article-header {
            text-align: center;
            padding: 2rem 0;
        }
        
        .article-title {
            font-size: 2.25rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 1rem;
            line-height: 1.3;
        }
        
        .article-meta {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
            color: var(--text-muted);
            font-size: 0.9rem;
        }
        
        .featured-image {
            width: 100%;
            max-height: 450px;
            object-fit: cover;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
            margin: 1.5rem 0 2rem;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.5s ease-out;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .article-title { font-size: 1.75rem; }
            .article-content { font-size: 1rem; }
            .article-content h1 { font-size: 1.6rem; }
            .article-content h2 { font-size: 1.35rem; }
            .share-btn { width: 40px; height: 40px; }
        }
    </style>
    
    {{codeBeforHead}}
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-glass fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold gradient-text" href="/">
                <i class="fa-solid fa-blog me-2"></i>{{siteName}}
            </a>
            <div class="navbar-nav ms-auto d-flex flex-row align-items-center gap-2">
                <a href="/" class="btn btn-outline-primary btn-sm rounded-pill px-3">
                    <i class="fa-solid fa-house me-1"></i>Home
                </a>
                <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark/light mode">
                    <i class="fa-solid fa-moon" id="theme-icon"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Article Content -->
    <div class="container mt-5 pt-5">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-9">
                <article class="glass-card p-4 p-md-5 mb-4 fade-in-up">
                    <header class="article-header">
                        <h1 class="article-title">{{title}}</h1>
                        <div class="article-meta">
                            <span><i class="fa-regular fa-calendar me-1"></i>{{createDate}}</span>
                            <span class="tag-badge">
                                <i class="fa-solid fa-tag me-1"></i>{{label}}
                            </span>
                        </div>
                        {{#img}}<img src="{{img}}" class="featured-image" alt="{{title}}">{{/img}}
                    </header>
                    
                    <!-- Hidden element to store raw markdown content -->
                    <div id="raw-content">{{content}}</div>
                    
                    <div class="article-content" id="article-content">
                        <!-- Content will be rendered here by JavaScript -->
                        <div class="text-center py-5">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading content...</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Sharing -->
                    <div class="mt-5 pt-4 border-top" style="border-color: var(--card-border) !important;">
                        <div class="row align-items-center">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <a href="/" class="btn btn-outline-primary rounded-pill">
                                    <i class="fa-solid fa-arrow-left me-2"></i>Back to Home
                                </a>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex justify-content-md-end align-items-center gap-2">
                                    <span class="text-muted me-2">Share:</span>
                                    <div class="share-buttons">
                                        <button onclick="shareOnTwitter()" class="share-btn btn-twitter" title="Share on X (Twitter)">
                                            <i class="fa-brands fa-x-twitter"></i>
                                        </button>
                                        <button onclick="shareOnFacebook()" class="share-btn btn-facebook" title="Share on Facebook">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                        <button onclick="shareOnLinkedIn()" class="share-btn btn-linkedin" title="Share on LinkedIn">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </button>
                                        <button onclick="copyShareLink()" class="share-btn btn-copy" title="Copy link">
                                            <i class="fa-solid fa-link"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container text-center">
            <div>{{copyRight}}</div>
        </div>
    </footer>

    <!-- Bootstrap 5.3.3 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Theme Toggle Functionality
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        }
        
        function updateThemeIcon(theme) {
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        }
        
        // Initialize theme on load
        setTheme(getPreferredTheme());

        function getShareUrl() {
            return window.location.href;
        }

        function getShareTitle() {
            return document.title.replace(\` - \${'{{siteName}}'}\`, '');
        }

        function shareOnTwitter() {
            const url = \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(getShareTitle())}&url=\${encodeURIComponent(getShareUrl())}\`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        function shareOnFacebook() {
            const url = \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(getShareUrl())}\`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        function shareOnLinkedIn() {
            const url = \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(getShareUrl())}\`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        async function copyShareLink() {
            try {
                await navigator.clipboard.writeText(getShareUrl());
                showNotification('Link copied to clipboard!', 'success');
            } catch (err) {
                const textArea = document.createElement('textarea');
                textArea.value = getShareUrl();
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Link copied to clipboard!', 'success');
            }
        }

        function showNotification(message, type = 'info') {
            const iconMap = {
                success: 'fa-solid fa-circle-check',
                warning: 'fa-solid fa-triangle-exclamation',
                info: 'fa-solid fa-circle-info'
            };
            
            const toast = document.createElement('div');
            toast.className = \`toast align-items-center text-bg-\${type} border-0\`;
            toast.innerHTML = \`
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="\${iconMap[type] || iconMap.info} me-2"></i>\${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            \`;
            
            const container = document.createElement('div');
            container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            container.style.zIndex = '1100';
            container.appendChild(toast);
            document.body.appendChild(container);
            
            const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
            bsToast.show();
            
            toast.addEventListener('hidden.bs.toast', () => {
                document.body.removeChild(container);
            });
        }

        // Parse and render markdown content
        function renderMarkdown() {
            const contentElement = document.getElementById('article-content');
            const rawContentElement = document.getElementById('raw-content');
            
            // Get the raw content and unescape newlines
            let rawContent = rawContentElement.textContent;
            rawContent = rawContent.replace(/\\\\n/g, '\\n').replace(/\\\\r/g, '\\r');
            
            if (!rawContent || rawContent.trim() === '') {
                contentElement.innerHTML = '<div class="alert alert-warning"><i class="fa-solid fa-triangle-exclamation me-2"></i>No content available.</div>';
                return;
            }
            
            if (window.marked && window.hljs) {
                try {
                    // Configure marked options
                    marked.setOptions({
                        highlight: function(code, lang) {
                            if (lang && hljs.getLanguage(lang)) {
                                try {
                                    return hljs.highlight(code, { language: lang }).value;
                                } catch (err) {
                                    console.warn('Error highlighting code:', err);
                                }
                            }
                            return hljs.highlightAuto(code).value;
                        },
                        breaks: true,
                        gfm: true
                    });
                    
                    const htmlContent = marked.parse(rawContent);
                    contentElement.innerHTML = htmlContent;
                    
                    // Apply additional styling after rendering
                    applyPostRenderStyles();
                } catch (error) {
                    console.error('Error parsing markdown:', error);
                    contentElement.innerHTML = \`<div class="alert alert-warning">
                        <h5><i class="fa-solid fa-triangle-exclamation me-2"></i>Error rendering content</h5>
                        <pre style="white-space: pre-wrap;">\${rawContent}</pre>
                    </div>\`;
                }
            } else {
                contentElement.innerHTML = \`<pre style="white-space: pre-wrap; font-family: inherit;">\${rawContent}</pre>\`;
            }
        }
        
        function applyPostRenderStyles() {
            const codeBlocks = document.querySelectorAll('pre code');
            codeBlocks.forEach(block => {
                if (!block.classList.contains('hljs')) {
                    block.classList.add('hljs');
                }
            });
            
            const lists = document.querySelectorAll('ul, ol');
            lists.forEach(list => {
                if (!list.style.marginBottom) {
                    list.style.marginBottom = '1.2rem';
                }
            });
        }
        
        document.addEventListener('DOMContentLoaded', renderMarkdown);
    </script>
    
    {{codeBeforBody}}
</body>
</html>
`,
    "bookmarks": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookmarks - {{siteName}}</title>
    
    <!-- Bootstrap 5.3.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6.5.1 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* CSS Variables for Light/Dark Themes */
        :root {
            --primary-color: #6366f1;
            --secondary-color: #8b5cf6;
            --accent-color: #06b6d4;
            --warning-color: #f59e0b;
            
            --bg-gradient-start: #667eea;
            --bg-gradient-end: #764ba2;
            --card-bg: rgba(255, 255, 255, 0.95);
            --card-border: rgba(255, 255, 255, 0.2);
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --navbar-bg: rgba(255, 255, 255, 0.95);
            --footer-bg: rgba(30, 41, 59, 0.95);
        }
        
        [data-bs-theme="dark"] {
            --bg-gradient-start: #1a1a2e;
            --bg-gradient-end: #16213e;
            --card-bg: rgba(30, 41, 59, 0.95);
            --card-border: rgba(255, 255, 255, 0.1);
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            --navbar-bg: rgba(30, 41, 59, 0.98);
            --footer-bg: rgba(15, 23, 42, 0.98);
        }
        
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
            min-height: 100vh;
            color: var(--text-primary);
        }
        
        .glass-card {
            background: var(--card-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-glass {
            background: var(--navbar-bg) !important;
            backdrop-filter: blur(12px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .theme-toggle {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border: 2px solid var(--card-border);
            background: var(--card-bg);
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .theme-toggle:hover {
            transform: rotate(180deg) scale(1.1);
        }
        
        .article-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .article-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .featured-img {
            height: 160px;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        
        .article-card:hover .featured-img {
            transform: scale(1.05);
        }
        
        .img-placeholder {
            height: 160px;
            background: linear-gradient(135deg, var(--warning-color), #d97706);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .gradient-text {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .tag-badge {
            background: linear-gradient(135deg, var(--accent-color), #3b82f6);
            color: white;
            font-size: 0.7rem;
            padding: 4px 10px;
            border-radius: 20px;
            font-weight: 500;
        }
        
        .bookmark-badge {
            background: linear-gradient(135deg, var(--warning-color), #d97706);
            color: white;
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-weight: 500;
        }
        
        .hero-section {
            padding: 80px 0 40px;
            text-align: center;
            color: white;
        }
        
        .hero-title {
            font-size: 2.25rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 0.6s ease-out;
        }
        
        .hero-subtitle {
            font-size: 1rem;
            opacity: 0.9;
            animation: fadeInUp 0.6s ease-out 0.2s both;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .content-section {
            padding: 30px 0;
        }
        
        .footer {
            background: var(--footer-bg);
            color: white;
            padding: 24px 0;
            margin-top: 40px;
        }
        
        .btn-gradient {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border: none;
            color: white;
            font-weight: 500;
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
            color: white;
        }
        
        .card-title-custom {
            color: var(--text-primary);
            font-size: 0.95rem;
            font-weight: 600;
            line-height: 1.4;
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 1.75rem;
            }
            
            .hero-section {
                padding: 70px 0 30px;
            }
        }
    </style>
    
    {{codeBeforHead}}
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-glass fixed-top py-2">
        <div class="container">
            <a class="navbar-brand fw-bold gradient-text" href="/">
                <i class="fa-solid fa-blog me-2"></i>{{siteName}}
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav ms-auto gap-2 align-items-center">
                    <a href="/" class="btn btn-outline-primary btn-sm rounded-pill px-3">
                        <i class="fa-solid fa-house me-1"></i>Home
                    </a>
                    <a href="/admin/" class="btn btn-gradient btn-sm rounded-pill px-3">
                        <i class="fa-solid fa-gauge-high me-1"></i>Admin
                    </a>
                    <button class="theme-toggle ms-2" onclick="toggleTheme()" aria-label="Toggle theme">
                        <i class="fa-solid fa-moon" id="theme-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <h1 class="hero-title">
                <i class="fa-solid fa-bookmark me-2"></i>My Bookmarks
            </h1>
            <p class="hero-subtitle">Articles you've saved for later reading</p>
        </div>
    </section>

    <!-- Bookmarks Section -->
    <section class="content-section">
        <div class="container">
            <div class="glass-card p-4 mb-4">
                <div class="row align-items-center mb-4">
                    <div class="col">
                        <h2 class="mb-0 h5 d-flex align-items-center gap-2" style="color: var(--text-primary);">
                            <i class="fa-solid fa-star" style="color: var(--warning-color);"></i>
                            Saved Articles
                        </h2>
                    </div>
                    <div class="col-auto">
                        <span class="bookmark-badge" id="bookmarks-count">
                            <i class="fa-solid fa-bookmark me-1"></i>0 bookmarks
                        </span>
                    </div>
                </div>
                
                <div class="row g-4" id="bookmarks-container">
                    <div class="col-12 text-center py-4">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container text-center">
            <div class="opacity-75">{{copyRight}}</div>
        </div>
    </footer>

    <!-- Bootstrap 5.3.3 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Theme Toggle
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        }
        
        setTheme(getPreferredTheme());

        function getBookmarks() {
            return JSON.parse(localStorage.getItem('blog_bookmarks') || '[]');
        }

        function loadBookmarks() {
            const bookmarks = getBookmarks();
            const container = document.getElementById('bookmarks-container');
            const countElement = document.getElementById('bookmarks-count');
            
            countElement.innerHTML = \`<i class="fa-solid fa-bookmark me-1"></i>\${bookmarks.length} bookmark\${bookmarks.length !== 1 ? 's' : ''}\`;
            
            if (bookmarks.length === 0) {
                container.innerHTML = \`
                    <div class="col-12 text-center py-5">
                        <i class="fa-regular fa-bookmark fa-4x mb-4" style="color: var(--text-muted);"></i>
                        <h5 style="color: var(--text-secondary);">No bookmarks yet</h5>
                        <p class="text-muted mb-4">Start bookmarking articles to see them here!</p>
                        <a href="/" class="btn btn-gradient">
                            <i class="fa-solid fa-newspaper me-2"></i>Browse Articles
                        </a>
                    </div>
                \`;
                return;
            }

            container.innerHTML = bookmarks.map((bookmark, index) => {
                const imgHtml = bookmark.img ? 
                    \`<div class="position-relative overflow-hidden">
                        <img src="\${bookmark.img}" class="featured-img w-100" alt="\${bookmark.title}" loading="lazy">
                    </div>\` : 
                    \`<div class="img-placeholder">
                        <i class="fa-solid fa-bookmark fa-2x text-white"></i>
                    </div>\`;
                
                return \`
                <div class="col-md-6 col-lg-4" style="animation: fadeInUp 0.5s ease-out \${index * 0.1}s both;">
                    <div class="article-card h-100">
                        \${imgHtml}
                        <div class="p-3 d-flex flex-column">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <span class="bookmark-badge">
                                    <i class="fa-solid fa-bookmark me-1"></i>Saved
                                </span>
                                <span class="tag-badge">\${bookmark.label}</span>
                            </div>
                            <h6 class="card-title-custom mb-2">\${bookmark.title}</h6>
                            <p class="text-muted small mb-3">
                                <i class="fa-regular fa-calendar me-1"></i>\${new Date(bookmark.bookmarkedAt).toLocaleDateString()}
                            </p>
                            <div class="d-flex gap-2 mt-auto">
                                <a href="/article/\${bookmark.permalink}" class="btn btn-gradient btn-sm flex-grow-1">
                                    <i class="fa-solid fa-book-open me-1"></i>Read
                                </a>
                                <button onclick="removeBookmark('\${bookmark.permalink}')" class="btn btn-outline-danger btn-sm" title="Remove bookmark">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                \`;
            }).join('');
        }

        function removeBookmark(permalink) {
            const bookmarks = getBookmarks();
            const filtered = bookmarks.filter(bookmark => bookmark.permalink !== permalink);
            localStorage.setItem('blog_bookmarks', JSON.stringify(filtered));
            loadBookmarks();
            showNotification('Bookmark removed', 'warning');
        }

        function showNotification(message, type = 'info') {
            const iconMap = {
                success: 'fa-solid fa-circle-check',
                warning: 'fa-solid fa-triangle-exclamation',
                info: 'fa-solid fa-circle-info'
            };
            
            const toast = document.createElement('div');
            toast.className = \`toast align-items-center text-bg-\${type} border-0\`;
            toast.innerHTML = \`
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="\${iconMap[type] || iconMap.info} me-2"></i>\${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            \`;
            
            const container = document.createElement('div');
            container.className = 'toast-container position-fixed top-0 end-0 p-3';
            container.style.zIndex = '1100';
            container.appendChild(toast);
            document.body.appendChild(container);
            
            const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
            bsToast.show();
            
            toast.addEventListener('hidden.bs.toast', () => {
                document.body.removeChild(container);
            });
        }

        loadBookmarks();
    </script>
    
    {{codeBeforBody}}
</body>
</html>
`,
    "edit": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{action}} Article - Admin</title>
    
    <!-- Bootstrap 5.3.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6.5.1 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Toast UI Editor -->
    <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css">
    
    <style>
        /* CSS Variables for Light/Dark Themes */
        :root {
            --primary-color: #6366f1;
            --secondary-color: #8b5cf6;
            --primary-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
            --border-radius: 16px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --card-border: #e5e7eb;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --sidebar-bg: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%);
            --navbar-bg: #1e293b;
            --input-bg: #ffffff;
            --editor-bg: #ffffff;
            --editor-toolbar: #f9fafb;
        }
        
        [data-bs-theme="dark"] {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --card-border: #334155;
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --sidebar-bg: linear-gradient(180deg, #312e81 0%, #4c1d95 100%);
            --navbar-bg: #0f172a;
            --input-bg: #1e293b;
            --editor-bg: #1e293b;
            --editor-toolbar: #334155;
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--bg-color);
            color: var(--text-primary);
        }
        
        .sidebar {
            background: var(--sidebar-bg);
            color: white;
            min-height: calc(100vh - 60px);
        }
        
        .sidebar .nav-link {
            color: rgba(255, 255, 255, 0.85);
            padding: 0.875rem 1.25rem;
            margin: 0.25rem 0.5rem;
            border-radius: 12px;
            transition: var(--transition);
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .sidebar .nav-link:hover,
        .sidebar .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            transform: translateX(6px);
        }
        
        .sidebar .nav-link i {
            width: 24px;
            text-align: center;
        }
        
        .sidebar-brand {
            padding: 1.5rem;
            font-weight: 700;
            font-size: 1.1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .navbar-admin {
            background: var(--navbar-bg) !important;
            box-shadow: var(--shadow-sm);
        }
        
        .theme-toggle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: transparent;
            color: white;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .theme-toggle:hover {
            transform: rotate(180deg);
            border-color: rgba(255, 255, 255, 0.6);
        }
        
        .card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-sm);
        }
        
        .card-header {
            background: transparent;
            border-bottom: 1px solid var(--card-border);
            padding: 1.25rem 1.5rem;
        }
        
        .card-body {
            padding: 1.5rem;
        }
        
        .form-label {
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }
        
        .form-control, .form-select {
            background: var(--input-bg);
            border: 1px solid var(--card-border);
            border-radius: 10px;
            padding: 0.75rem 1rem;
            color: var(--text-primary);
            transition: var(--transition);
        }
        
        .form-control:focus, .form-select:focus {
            background: var(--input-bg);
            border-color: var(--primary-color);
            color: var(--text-primary);
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
        }
        
        .form-text {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }
        
        .input-group .btn {
            border-radius: 0 10px 10px 0;
        }
        
        .input-group .form-control {
            border-radius: 10px 0 0 10px;
        }
        
        .btn-primary {
            background: var(--primary-gradient);
            border: none;
            border-radius: 10px;
            padding: 0.75rem 1.5rem;
            font-weight: 500;
            transition: var(--transition);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
        }
        
        .btn-secondary {
            border-radius: 10px;
            padding: 0.75rem 1.5rem;
            font-weight: 500;
        }
        
        /* Toast UI Editor Styling */
        .editor-wrapper {
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }
        .toastui-editor-defaultUI {
            border: 1px solid var(--card-border);
            border-radius: var(--border-radius);
        }
        .toastui-editor-defaultUI-toolbar {
            height: auto !important;
            flex-wrap: wrap !important;
            overflow: visible !important;
        }
        .toastui-editor-toolbar-more-btn { display: none !important; }
        .toastui-editor-toolbar-group {
            display: inline-flex !important;
            flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
            .sidebar {
                min-height: auto;
                padding: 1rem 0;
            }
            
            .card-header, .card-body {
                padding: 1rem;
            }
        }
    </style>
    
    {{codeBeforHead}}
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-dark navbar-admin">
        <div class="container-fluid px-4">
            <span class="navbar-brand d-flex align-items-center gap-2">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>{{action}} Article</span>
            </span>
            <div class="d-flex align-items-center gap-2">
                <a href="/admin/" class="btn btn-outline-light btn-sm">
                    <i class="fa-solid fa-arrow-left me-1"></i>Back
                </a>
                <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
                    <i class="fa-solid fa-moon" id="theme-icon"></i>
                </button>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-3 col-lg-2 sidebar p-0">
                <div class="sidebar-brand d-none d-md-block">
                    <i class="fa-solid fa-shield-halved me-2"></i>Admin Panel
                </div>
                <div class="p-3">
                    <nav class="nav flex-column">
                        <a href="/admin/" class="nav-link">
                            <i class="fa-solid fa-newspaper"></i>
                            <span>Articles</span>
                        </a>
                        <a href="/admin/edit" class="nav-link active">
                            <i class="fa-solid fa-circle-plus"></i>
                            <span>{{action}} Article</span>
                        </a>
                    </nav>
                </div>
            </div>
            
            <!-- Main Content -->
            <div class="col-md-9 col-lg-10 py-4 px-4">
                <div class="card">
                    <div class="card-header">
                        <h4 class="mb-0 d-flex align-items-center gap-2">
                            <i class="fa-solid fa-file-pen" style="color: var(--primary-color);"></i>
                            {{action}} Article
                        </h4>
                    </div>
                    <div class="card-body">
                        <form id="article-form" class="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="permalink" class="form-label">
                                        <i class="fa-solid fa-link me-1"></i>Permalink *
                                    </label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="permalink" required 
                                               pattern="[a-z0-9-]+" title="Only lowercase letters, numbers, and hyphens allowed">
                                        <button class="btn btn-outline-secondary" type="button" id="generate-slug-btn" title="Generate from title">
                                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                                        </button>
                                    </div>
                                    <div class="form-text">URL-friendly identifier - Click magic wand to auto-generate</div>
                                </div>
                                
                                <div class="col-md-6 mb-3">
                                    <label for="label" class="form-label">
                                        <i class="fa-solid fa-tag me-1"></i>Label *
                                    </label>
                                    <select class="form-select" id="label" required>
                                        <option value="">Choose a label...</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Food">Food</option>
                                        <option value="Business">Business</option>
                                        <option value="Science">Science</option>
                                        <option value="Health">Health</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="title" class="form-label">
                                    <i class="fa-solid fa-heading me-1"></i>Title *
                                </label>
                                <input type="text" class="form-control" id="title" required placeholder="Enter article title">
                            </div>
                            
                            <div class="mb-3">
                                <label for="img" class="form-label">
                                    <i class="fa-solid fa-image me-1"></i>Featured Image URL
                                </label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="img" placeholder="https://example.com/image.jpg">
                                    <button class="btn btn-outline-secondary" type="button" id="upload-img-btn" title="Upload image">
                                        <i class="fa-solid fa-upload"></i>
                                    </button>
                                </div>
                                <input type="file" id="upload-img-input" accept="image/*" style="display:none">
                                <div id="upload-img-status" class="form-text"></div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="createDate" class="form-label">
                                        <i class="fa-regular fa-calendar me-1"></i>Publish Date *
                                    </label>
                                    <input type="datetime-local" class="form-control" id="createDate" required>
                                </div>
                                
                                <div class="col-md-6 mb-3">
                                    <label for="status" class="form-label">
                                        <i class="fa-solid fa-toggle-on me-1"></i>Status
                                    </label>
                                    <select class="form-select" id="status">
                                        <option value="published">Published</option>
                                        <option value="draft">Draft</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <label class="form-label">
                                    <i class="fa-solid fa-file-lines me-1"></i>Content *
                                </label>
                                <input type="file" id="editor-img-input" accept="image/*" style="display:none">
                                <input type="file" id="editor-file-input" accept="*/*" style="display:none">
                                <div class="editor-wrapper">
                                    <div id="content-editor"></div>
                                </div>
                            </div>
                            
                            <div class="d-flex gap-3 justify-content-end pt-3 border-top" style="border-color: var(--card-border) !important;">
                                <button type="button" class="btn btn-secondary" onclick="window.history.back()">
                                    <i class="fa-solid fa-xmark me-1"></i>Cancel
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa-solid fa-floppy-disk me-1"></i>Save Article
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
    <script>
        // Theme Toggle
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        }
        
        setTheme(getPreferredTheme());

        let editor;
        let isEditing = false;
        let currentPermalink = '';

        function makeToolbarBtn(svgPath, tooltip, inputId) {
            const btn = document.createElement('button');
            btn.type = 'button'; btn.title = tooltip;
            btn.style.cssText = 'background:none;border:1px solid transparent;cursor:pointer;padding:0;width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;border-radius:2px;vertical-align:top;';
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">' + svgPath + '</svg>';
            btn.addEventListener('mouseover', () => { btn.style.background = '#f7f7f7'; btn.style.borderColor = '#d4d4d4'; });
            btn.addEventListener('mouseout', () => { btn.style.background = 'none'; btn.style.borderColor = 'transparent'; });
            btn.addEventListener('mousedown', (e) => { e.preventDefault(); document.getElementById(inputId).click(); });
            return btn;
        }

        editor = new toastui.Editor({
            el: document.getElementById('content-editor'),
            initialEditType: 'wysiwyg',
            previewStyle: 'tab',
            height: '500px',
            toolbarItems: [
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'link'],
                [
                    { name: 'imageUpload', el: makeToolbarBtn('<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>', 'Upload Image', 'editor-img-input') },
                    { name: 'fileAttach', el: makeToolbarBtn('<path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>', 'Attach File', 'editor-file-input') },
                ],
            ],
        });

        // Check if editing existing article
        const urlParams = new URLSearchParams(window.location.search);
        const permalink = urlParams.get('permalink');
        
        if (permalink) {
            isEditing = true;
            currentPermalink = permalink;
            document.title = 'Edit Article - Admin';
            loadArticle(permalink);
        }

        async function loadArticle(permalink) {
            try {
                const response = await fetch('/api/articles/' + permalink);
                if (!response.ok) throw new Error('Article not found');
                
                const article = await response.json();
                
                document.getElementById('permalink').value = article.permalink;
                document.getElementById('permalink').readOnly = true;
                document.getElementById('title').value = article.title;
                document.getElementById('img').value = article.img || '';
                document.getElementById('label').value = article.label;
                document.getElementById('createDate').value = new Date(article.createDate).toISOString().slice(0, 16);
                
                if (article.status) {
                    document.getElementById('status').value = article.status;
                }
                
                editor.setMarkdown(article.content || '');
            } catch (error) {
                console.error('Error loading article:', error);
                alert('Error loading article');
                window.location.href = '/admin/';
            }
        }

        document.getElementById('article-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (!e.target.checkValidity()) {
                e.target.classList.add('was-validated');
                return;
            }

            const submitBtn = e.target.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-1"></i>Saving...';

            const formData = {
                permalink: document.getElementById('permalink').value,
                title: document.getElementById('title').value,
                img: document.getElementById('img').value,
                label: document.getElementById('label').value,
                createDate: document.getElementById('createDate').value,
                content: editor.getMarkdown(),
                status: document.getElementById('status').value
            };

            try {
                const url = isEditing ? '/api/articles/' + currentPermalink : '/api/articles';
                const method = isEditing ? 'PUT' : 'POST';
                
                const response = await fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const message = isEditing ? 'Article updated!' : 'Article created!';
                    alert(formData.status === 'draft' ? message + ' (Saved as draft)' : message);
                    window.location.href = '/admin/';
                } else {
                    throw new Error(await response.text());
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error saving article: ' + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk me-1"></i>Save Article';
            }
        });

        // Set default date to now
        document.getElementById('createDate').value = new Date().toISOString().slice(0, 16);

        // Auto-generate slug from title
        function generateSlugLocal(title) {
            if (!title) return '';
            return title.toLowerCase().trim()
                .replace(/[^\\w\\s-]/g, '')
                .replace(/[\\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }

        document.getElementById('generate-slug-btn').addEventListener('click', async () => {
            const title = document.getElementById('title').value;
            if (!title) {
                alert('Please enter a title first');
                return;
            }

            const btn = document.getElementById('generate-slug-btn');
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

            try {
                const response = await fetch('/api/generate-slug', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title })
                });

                if (response.ok) {
                    const data = await response.json();
                    document.getElementById('permalink').value = data.slug;
                } else {
                    document.getElementById('permalink').value = generateSlugLocal(title);
                }
            } catch (error) {
                document.getElementById('permalink').value = generateSlugLocal(title);
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
            }
        });

        // Auto-generate slug on title blur if permalink is empty
        document.getElementById('title').addEventListener('blur', () => {
            const permalinkField = document.getElementById('permalink');
            if (!permalinkField.value && !isEditing) {
                const title = document.getElementById('title').value;
                if (title) {
                    permalinkField.value = generateSlugLocal(title);
                }
            }
        });

        // ── File Upload ──────────────────────────────────────────────
        async function doUpload(file) {
            if (file.size > 10 * 1024 * 1024) throw new Error('File too large (max 10 MB)');
            const fd = new FormData();
            fd.append('file', file);
            const resp = await fetch('/api/upload', { method: 'POST', body: fd });
            const result = await resp.json();
            if (!resp.ok) throw new Error(result.error || resp.statusText);
            return result;
        }

        document.getElementById('upload-img-btn').addEventListener('click', () => {
            document.getElementById('upload-img-input').click();
        });

        document.getElementById('upload-img-input').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const statusEl = document.getElementById('upload-img-status');
            statusEl.textContent = 'Uploading...';
            try {
                const result = await doUpload(file);
                document.getElementById('img').value = result.url;
                statusEl.textContent = 'Uploaded: ' + result.filename;
                statusEl.className = 'form-text text-success';
            } catch (e) {
                statusEl.textContent = e.message;
                statusEl.className = 'form-text text-danger';
            }
            e.target.value = '';
        });

        document.getElementById('editor-img-input').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
                const result = await doUpload(file);
                editor.exec('addImage', { imageUrl: result.url, altText: result.filename });
            } catch (err) {
                alert('Upload failed: ' + err.message);
            }
            e.target.value = '';
        });

        document.getElementById('editor-file-input').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
                const result = await doUpload(file);
                editor.insertText(\`[\${result.filename}](\${result.url})\`);
            } catch (err) {
                alert('Upload failed: ' + err.message);
            }
            e.target.value = '';
        });
    </script>

    {{codeBeforBody}}
</body>
</html>
`,
    "index": `<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{siteName}}</title>
    <meta name="description" content="{{siteDescription}}">
    <meta name="keywords" content="{{keyWords}}">
    
    <!-- Bootstrap 5.3.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6.5.1 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* CSS Variables for Light/Dark Themes */
        :root {
            --primary-color: #4f46e5;
            --primary-light: #818cf8;
            --secondary-color: #7c3aed;
            --accent-color: #0ea5e9;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            
            /* Light mode colors */
            --bg-primary: #f8fafc;
            --bg-secondary: #ffffff;
            --card-bg: #ffffff;
            --card-border: #e2e8f0;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --text-muted: #94a3b8;
            --navbar-bg: rgba(255, 255, 255, 0.85);
            --footer-bg: #0f172a;
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.12);
        }
        
        [data-bs-theme="dark"] {
            --bg-primary: #0f172a;
            --bg-secondary: #1e293b;
            --card-bg: #1e293b;
            --card-border: #334155;
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --text-muted: #64748b;
            --navbar-bg: rgba(15, 23, 42, 0.9);
            --footer-bg: #020617;
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            min-height: 100vh;
            color: var(--text-primary);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        /* Navbar Styling */
        .navbar-glass {
            background: var(--navbar-bg) !important;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--card-border);
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
        }
        
        /* Theme Toggle Button */
        .theme-toggle {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid var(--card-border);
            background: var(--card-bg);
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 1rem;
        }
        
        .theme-toggle:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
            transform: scale(1.05);
        }
        
        /* Article Card */
        .article-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-sm);
        }
        
        .article-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary-light);
        }
        
        .featured-img {
            height: 200px;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        
        .article-card:hover .featured-img {
            transform: scale(1.03);
        }
        
        .img-placeholder {
            height: 200px;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .img-placeholder i {
            font-size: 2.5rem;
            color: rgba(255, 255, 255, 0.9);
        }
        
        /* Gradient Text */
        .gradient-text {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        /* Tag Badge */
        .tag-badge {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            font-size: 0.65rem;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        /* Hero Section */
        .hero-section {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            padding: 100px 0 60px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.4;
        }
        
        .hero-title {
            font-size: 2.75rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            animation: fadeInUp 0.6s ease-out;
            position: relative;
        }
        
        .hero-subtitle {
            font-size: 1.1rem;
            font-weight: 400;
            opacity: 0.95;
            max-width: 600px;
            margin: 0 auto;
            animation: fadeInUp 0.6s ease-out 0.15s both;
            position: relative;
        }
        
        /* Content Section */
        .content-section {
            padding: 50px 0;
        }
        
        /* Footer */
        .footer {
            background: var(--footer-bg);
            color: #94a3b8;
            padding: 28px 0;
            margin-top: 50px;
            font-size: 0.9rem;
            border-top: 1px solid var(--card-border);
        }
        
        .footer a {
            color: #cbd5e1;
            transition: color 0.2s ease;
        }
        
        .footer a:hover {
            color: white;
        }
        
        /* Bookmark Button */
        .bookmark-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 10px;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            z-index: 10;
            box-shadow: var(--shadow-md);
            color: var(--text-secondary);
        }
        
        .bookmark-btn:hover {
            transform: scale(1.1);
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
        
        .bookmark-btn.bookmarked {
            background: var(--warning-color);
            color: white;
            border-color: var(--warning-color);
        }
        
        /* Share Button */
        .share-btn {
            background: none;
            border: none;
            color: var(--text-muted);
            transition: all 0.2s ease;
            padding: 0.4rem;
            border-radius: 8px;
        }
        
        .share-btn:hover {
            color: var(--primary-color);
            background: rgba(79, 70, 229, 0.1);
        }
        
        /* Primary Button */
        .btn-gradient {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border: none;
            color: white;
            font-weight: 600;
            padding: 0.5rem 1.25rem;
            border-radius: 10px;
            transition: all 0.2s ease;
            font-size: 0.85rem;
        }
        
        .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
            color: white;
        }
        
        /* Card Body */
        .card-body-custom {
            padding: 1.25rem;
        }
        
        .card-title-custom {
            color: var(--text-primary);
            font-size: 1.05rem;
            font-weight: 700;
            line-height: 1.4;
            margin-bottom: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .card-text-custom {
            color: var(--text-secondary);
            font-size: 0.875rem;
            line-height: 1.6;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .card-meta {
            color: var(--text-muted);
            font-size: 0.75rem;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.5s ease-out;
        }
        
        /* Glass Card */
        .glass-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            box-shadow: var(--shadow-md);
        }
        
        /* Pagination Styles */
        .pagination .page-link {
            border: 1px solid var(--card-border);
            color: var(--text-secondary);
            background: var(--card-bg);
            margin: 0 3px;
            border-radius: 10px;
            padding: 0.5rem 0.875rem;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        
        .pagination .page-link:hover {
            background: var(--primary-color);
            border-color: var(--primary-color);
            color: white;
        }
        
        .pagination .page-item.active .page-link {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-color: var(--primary-color);
            color: white;
        }
        
        .pagination .page-item.disabled .page-link {
            background: var(--bg-primary);
            color: var(--text-muted);
            border-color: var(--card-border);
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .hero-title { font-size: 2.25rem; }
            .hero-subtitle { font-size: 1rem; }
        }
        
        @media (max-width: 768px) {
            .hero-title { font-size: 1.875rem; }
            .hero-subtitle { font-size: 0.95rem; }
            .hero-section { padding: 85px 0 45px; }
            .featured-img, .img-placeholder { height: 180px; }
            .theme-toggle { width: 38px; height: 38px; }
        }
        
        @media (max-width: 576px) {
            .hero-title { font-size: 1.5rem; }
            .hero-section { padding: 75px 0 35px; }
            .content-section { padding: 30px 0; }
        }
        
        /* Loading Spinner */
        .loading-spinner {
            width: 44px;
            height: 44px;
            border: 3px solid var(--card-border);
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Modal Styling */
        .modal-content {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
        }
        
        .modal-header, .modal-footer {
            border-color: var(--card-border);
        }
    </style>
    
    {{codeBeforHead}}
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-glass fixed-top py-2">
        <div class="container">
            <a class="navbar-brand fw-bold gradient-text" href="/" style="font-size: 1.2rem;">
                <i class="fa-solid fa-blog me-2"></i>{{siteName}}
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav ms-auto gap-2 align-items-center">
                    <a href="/bookmarks" class="btn btn-outline-secondary btn-sm rounded-pill px-3">
                        <i class="fa-solid fa-bookmark me-1"></i>Bookmarks
                    </a>
                    <a href="/admin/" class="btn btn-gradient btn-sm rounded-pill px-3">
                        <i class="fa-solid fa-gauge-high me-1"></i>Admin
                    </a>
                    <button class="theme-toggle ms-2" onclick="toggleTheme()" aria-label="Toggle dark/light mode">
                        <i class="fa-solid fa-moon" id="theme-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <h1 class="hero-title">
                <i class="fa-solid fa-feather-pointed me-2"></i>{{siteName}}
            </h1>
            <p class="hero-subtitle">{{siteDescription}}</p>
        </div>
    </section>

    <!-- Articles Section -->
    <section class="content-section">
        <div class="container">
            <div class="row g-4" id="articles-container">
                <div class="col-12 text-center py-5">
                    <div class="loading-spinner mx-auto"></div>
                    <p class="mt-3" style="color: var(--text-muted);">Loading articles...</p>
                </div>
            </div>
            <!-- Pagination -->
            <div id="pagination-container" class="mt-4"></div>
        </div>
    </section>

    <!-- Share Modal -->
    <div class="modal fade" id="shareModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content glass-card border-0">
                <div class="modal-header border-bottom-0 py-3">
                    <h5 class="modal-title">
                        <i class="fa-solid fa-share-nodes me-2 gradient-text"></i>Share Article
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body pb-4">
                    <p id="share-article-title" class="text-muted mb-4"></p>
                    <div class="d-flex justify-content-center gap-3">
                        <button onclick="shareOnPlatform('twitter')" class="btn btn-lg btn-outline-info rounded-circle p-3" title="Share on X (Twitter)">
                            <i class="fa-brands fa-x-twitter fa-lg"></i>
                        </button>
                        <button onclick="shareOnPlatform('facebook')" class="btn btn-lg btn-outline-primary rounded-circle p-3" title="Share on Facebook">
                            <i class="fa-brands fa-facebook-f fa-lg"></i>
                        </button>
                        <button onclick="shareOnPlatform('linkedin')" class="btn btn-lg btn-outline-primary rounded-circle p-3" style="--bs-btn-hover-bg: #0a66c2; --bs-btn-hover-border-color: #0a66c2;" title="Share on LinkedIn">
                            <i class="fa-brands fa-linkedin-in fa-lg"></i>
                        </button>
                        <button onclick="copyArticleLink()" class="btn btn-lg btn-outline-secondary rounded-circle p-3" title="Copy link">
                            <i class="fa-solid fa-link fa-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
                    <span class="opacity-75">{{copyRight}}</span>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <a href="/rss.xml" class="text-white-50 me-3 text-decoration-none" title="RSS Feed">
                        <i class="fa-solid fa-rss"></i>
                    </a>
                    <a href="/sitemap.xml" class="text-white-50 text-decoration-none" title="Sitemap">
                        <i class="fa-solid fa-sitemap"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap 5.3.3 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Theme Toggle Functionality
        function getPreferredTheme() {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        }
        
        function updateThemeIcon(theme) {
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-bs-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        }
        
        // Initialize theme on load
        setTheme(getPreferredTheme());

        let currentSharePermalink = '';
        let currentShareTitle = '';

        function getBookmarks() {
            return JSON.parse(localStorage.getItem('blog_bookmarks') || '[]');
        }

        function saveBookmarks(bookmarks) {
            localStorage.setItem('blog_bookmarks', JSON.stringify(bookmarks));
        }

        function isArticleBookmarked(permalink) {
            const bookmarks = getBookmarks();
            return bookmarks.some(bookmark => bookmark.permalink === permalink);
        }

        function toggleBookmark(permalink, title, img, label) {
            const bookmarks = getBookmarks();
            const existingIndex = bookmarks.findIndex(bookmark => bookmark.permalink === permalink);
            
            if (existingIndex > -1) {
                bookmarks.splice(existingIndex, 1);
                saveBookmarks(bookmarks);
                showNotification('Bookmark removed', 'warning');
            } else {
                bookmarks.push({
                    permalink,
                    title,
                    img,
                    label,
                    bookmarkedAt: new Date().toISOString()
                });
                saveBookmarks(bookmarks);
                showNotification('Article bookmarked!', 'success');
            }
            
            loadArticles();
        }

        function shareArticle(permalink, title) {
            currentSharePermalink = permalink;
            currentShareTitle = title;
            document.getElementById('share-article-title').textContent = title;
            new bootstrap.Modal(document.getElementById('shareModal')).show();
        }

        function shareOnPlatform(platform) {
            const url = \`\${window.location.origin}/article/\${currentSharePermalink}\`;
            
            const shareUrls = {
                twitter: \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(currentShareTitle)}&url=\${encodeURIComponent(url)}\`,
                facebook: \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(url)}\`,
                linkedin: \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(url)}\`
            };
            
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
            bootstrap.Modal.getInstance(document.getElementById('shareModal')).hide();
        }

        async function copyArticleLink() {
            const url = \`\${window.location.origin}/article/\${currentSharePermalink}\`;
            try {
                await navigator.clipboard.writeText(url);
                showNotification('Link copied to clipboard!', 'success');
            } catch (err) {
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Link copied to clipboard!', 'success');
            }
            bootstrap.Modal.getInstance(document.getElementById('shareModal')).hide();
        }

        function showNotification(message, type = 'info') {
            const iconMap = {
                success: 'fa-solid fa-circle-check',
                warning: 'fa-solid fa-triangle-exclamation',
                info: 'fa-solid fa-circle-info',
                danger: 'fa-solid fa-circle-xmark'
            };
            
            const toast = document.createElement('div');
            toast.className = \`toast align-items-center text-bg-\${type} border-0\`;
            toast.innerHTML = \`
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="\${iconMap[type] || iconMap.info} me-2"></i>\${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            \`;
            
            const container = document.createElement('div');
            container.className = 'toast-container position-fixed top-0 end-0 p-3';
            container.style.zIndex = '1100';
            container.appendChild(toast);
            document.body.appendChild(container);
            
            const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
            bsToast.show();
            
            toast.addEventListener('hidden.bs.toast', () => {
                document.body.removeChild(container);
            });
        }

        let currentPage = 1;
        let totalPages = 1;
        const pageSize = 10;

        async function loadArticles(page = 1) {
            try {
                currentPage = page;
                const response = await fetch(\`/api/articles?paginate=true&page=\${page}&pageSize=\${pageSize}\`);
                if (!response.ok) throw new Error('Failed to load articles');
                const data = await response.json();
                const articles = data.articles || [];
                const pagination = data.pagination || {};
                totalPages = pagination.totalPages || 1;
                
                const container = document.getElementById('articles-container');
                
                if (articles.length === 0) {
                    container.innerHTML = \`
                        <div class="col-12 text-center fade-in">
                            <div class="glass-card p-5">
                                <i class="fa-solid fa-newspaper fa-4x text-muted mb-4"></i>
                                <h3 class="text-muted mb-3">No Articles Yet</h3>
                                <p class="text-muted mb-4">Check back later for new content!</p>
                                <a href="/admin/" class="btn btn-gradient">
                                    <i class="fa-solid fa-plus me-2"></i>Create Your First Article
                                </a>
                            </div>
                        </div>
                    \`;
                    updatePaginationUI(pagination);
                    return;
                }

                // Escape HTML to prevent XSS
                const escapeHtml = (str) => {
                    if (!str) return '';
                    return String(str)
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#039;');
                };

                // Escape for use in JavaScript strings (onclick handlers)
                const escapeJs = (str) => {
                    if (!str) return '';
                    return String(str)
                        .replace(/\\\\/g, '\\\\\\\\')
                        .replace(/'/g, "\\\\'")
                        .replace(/"/g, '\\\\"')
                        .replace(/\\n/g, '\\\\n')
                        .replace(/\\r/g, '\\\\r');
                };

                container.innerHTML = articles.map((article, index) => {
                    const isBookmarked = isArticleBookmarked(article.permalink);
                    
                    // HTML-safe versions for display
                    const safeTitle = escapeHtml(article.title);
                    const safeImg = escapeHtml(article.img);
                    const safePermalink = escapeHtml(article.permalink);
                    const safeLabel = escapeHtml(article.label);
                    const safeExcerpt = escapeHtml(article.excerpt);
                    
                    // JS-safe versions for onclick handlers
                    const jsSafePermalink = escapeJs(article.permalink);
                    const jsSafeTitle = escapeJs(article.title);
                    const jsSafeImg = escapeJs(article.img);
                    const jsSafeLabel = escapeJs(article.label);

                    const imgHtml = article.img ? 
                        \`<div class="position-relative overflow-hidden">
                            <img src="\${safeImg}" class="featured-img w-100" alt="\${safeTitle}" loading="lazy">
                        </div>\` : 
                        \`<div class="img-placeholder">
                            <i class="fa-solid fa-file-lines"></i>
                        </div>\`;
                    
                    return \`
                    <div class="col-md-6 col-lg-4" style="animation-delay: \${index * 0.1}s">
                        <div class="article-card h-100 position-relative">
                            <button class="bookmark-btn \${isBookmarked ? 'bookmarked' : ''}" 
                                    onclick="toggleBookmark('\${jsSafePermalink}', '\${jsSafeTitle}', '\${jsSafeImg}', '\${jsSafeLabel}')"
                                    title="\${isBookmarked ? 'Remove bookmark' : 'Bookmark article'}">
                                <i class="fa-\${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
                            </button>
                            \${imgHtml}
                            <div class="card-body-custom d-flex flex-column">
                                <div class="d-flex align-items-center gap-2 mb-2">
                                    <span class="tag-badge">\${safeLabel}</span>
                                    <span class="card-meta">
                                        <i class="fa-regular fa-calendar me-1"></i>\${new Date(article.createDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <h5 class="card-title-custom">\${safeTitle}</h5>
                                <p class="card-text-custom flex-grow-1 mb-3">\${safeExcerpt}</p>
                                <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top" style="border-color: var(--card-border) !important;">
                                    <a href="/article/\${safePermalink}" class="btn btn-gradient btn-sm">
                                        <i class="fa-solid fa-book-open me-1"></i>Read More
                                    </a>
                                    <button class="share-btn" onclick="shareArticle('\${jsSafePermalink}', '\${jsSafeTitle}')" title="Share article">
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    \`;
                }).join('');

                updatePaginationUI(pagination);
            } catch (error) {
                console.error('Error loading articles:', error);
                const container = document.getElementById('articles-container');
                container.innerHTML = \`
                    <div class="col-12 text-center fade-in">
                        <div class="glass-card p-5">
                            <i class="fa-solid fa-triangle-exclamation fa-4x text-danger mb-4"></i>
                            <h3 class="text-danger mb-3">Error Loading Articles</h3>
                            <p class="text-muted mb-4">Please try again later.</p>
                            <button onclick="loadArticles()" class="btn btn-gradient">
                                <i class="fa-solid fa-rotate me-2"></i>Retry
                            </button>
                        </div>
                    </div>
                \`;
            }
        }

        function updatePaginationUI(pagination) {
            const paginationContainer = document.getElementById('pagination-container');
            if (!paginationContainer) return;
            
            if (pagination.totalPages <= 1) {
                paginationContainer.innerHTML = '';
                return;
            }

            let paginationHtml = '<nav aria-label="Article pagination"><ul class="pagination justify-content-center mb-2">';
            
            // Previous button
            paginationHtml += \`<li class="page-item \${!pagination.hasPrevPage ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="loadArticles(\${pagination.page - 1}); return false;" \${!pagination.hasPrevPage ? 'tabindex="-1"' : ''}>
                    <i class="fa-solid fa-chevron-left me-1"></i>Prev
                </a>
            </li>\`;

            // Page numbers
            const startPage = Math.max(1, pagination.page - 2);
            const endPage = Math.min(pagination.totalPages, pagination.page + 2);

            if (startPage > 1) {
                paginationHtml += \`<li class="page-item"><a class="page-link" href="#" onclick="loadArticles(1); return false;">1</a></li>\`;
                if (startPage > 2) {
                    paginationHtml += \`<li class="page-item disabled"><span class="page-link">...</span></li>\`;
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                paginationHtml += \`<li class="page-item \${i === pagination.page ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="loadArticles(\${i}); return false;">\${i}</a>
                </li>\`;
            }

            if (endPage < pagination.totalPages) {
                if (endPage < pagination.totalPages - 1) {
                    paginationHtml += \`<li class="page-item disabled"><span class="page-link">...</span></li>\`;
                }
                paginationHtml += \`<li class="page-item"><a class="page-link" href="#" onclick="loadArticles(\${pagination.totalPages}); return false;">\${pagination.totalPages}</a></li>\`;
            }

            // Next button
            paginationHtml += \`<li class="page-item \${!pagination.hasNextPage ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="loadArticles(\${pagination.page + 1}); return false;" \${!pagination.hasNextPage ? 'tabindex="-1"' : ''}>
                    Next<i class="fa-solid fa-chevron-right ms-1"></i>
                </a>
            </li>\`;

            paginationHtml += '</ul></nav>';
            paginationHtml += \`<p class="text-center small mb-0" style="color: var(--text-muted);">
                <i class="fa-solid fa-layer-group me-1"></i>Page \${pagination.page} of \${pagination.totalPages} (\${pagination.totalArticles} articles)
            </p>\`;

            paginationContainer.innerHTML = paginationHtml;
        }

        loadArticles();
    </script>
    
    {{codeBeforBody}}
</body>
</html>
`,
};

const OPT = {
    "user": "admin",
    "password": "amepasuwa-do",
    "siteDomain": "blog.oshekher.workers.dev",
    "siteName": "CF Workers Blog",
    "siteDescription": "A Blog Powered By Cloudflare Workers and KV",
    "keyWords": "cloudflare,KV,workers,blog",
    "pageSize": 10,
    "recentlySize": 6,
    "readMoreLength": 150,
    "cacheTime": 60 * 60 * 24 * 0.5,
    "themeURL": "https://raw.githubusercontent.com/amber-color/cloudflare-workers-blog/main/themes/default/",
    "html404": ``,
    "codeBeforHead": ``,
    "codeBeforBody": ``,
    "commentCode": ``,
    "widgetOther": ``,
    "copyRight": ``,
    "robots": `User-agent: *\nDisallow: /admin`,
    "draftPrefix": "DRAFT_"
};

/**
 * Generate URL-friendly slug from title
 * Converts the title to lowercase, removes special characters,
 * replaces spaces and underscores with hyphens, and removes leading/trailing hyphens.
 * 
 * @param {string} title - The title to convert to slug
 * @returns {string} - URL-friendly slug (lowercase, alphanumeric with hyphens)
 * @example
 * generateSlug("Hello World!") // Returns "hello-world"
 * generateSlug("My Article Title 2024") // Returns "my-article-title-2024"
 */
function generateSlug(title) {
    if (!title) return '';
    
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters except word chars, spaces, hyphens
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

class Blog {
    constructor() {
        this.kv = null;
        this.themeCache = new Map();
        this.articleCache = new Map();
        this.indexCache = null;
        this.indexCacheTime = 0;
        this.cacheTimeout = 60000; // 1 minute cache
    }

    setKV(kv) {
        this.kv = kv;
    }

    /**
     * Get value from KV with optional parsing and error handling
     * @param {string} key - KV key
     * @param {boolean} parse - Whether to parse JSON
     * @returns {Promise<any>} - Value or null
     */
    async get(key, parse = false) {
        try {
            const value = await this.kv.get(key);
            if (!parse) return value;
            if (!value) return null;
            return JSON.parse(value);
        } catch (error) {
            console.error(`Error getting key ${key}:`, error);
            return null;
        }
    }

    /**
     * Batch get multiple keys from KV (optimized)
     * @param {string[]} keys - Array of keys to fetch
     * @param {boolean} parse - Whether to parse JSON
     * @returns {Promise<Map<string, any>>} - Map of key-value pairs
     */
    async getMultiple(keys, parse = false) {
        const results = new Map();
        if (!keys || keys.length === 0) return results;

        try {
            // Fetch all keys in parallel for better performance
            const promises = keys.map(async (key) => {
                const value = await this.get(key, parse);
                return { key, value };
            });

            const resolved = await Promise.all(promises);
            resolved.forEach(({ key, value }) => {
                if (value !== null) {
                    results.set(key, value);
                }
            });
        } catch (error) {
            console.error('Error in batch get:', error);
        }

        return results;
    }

    /**
     * Put value to KV with error handling
     * @param {string} key - KV key
     * @param {any} value - Value to store
     */
    async put(key, value) {
        try {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            await this.kv.put(key, value);
            // Invalidate cache when data changes
            this.invalidateCache(key);
        } catch (error) {
            console.error(`Error putting key ${key}:`, error);
            throw new Error(`Failed to save data: ${error.message}`);
        }
    }

    /**
     * Delete key from KV with error handling
     * @param {string} key - KV key
     */
    async delete(key) {
        try {
            await this.kv.delete(key);
            this.invalidateCache(key);
        } catch (error) {
            console.error(`Error deleting key ${key}:`, error);
            throw new Error(`Failed to delete data: ${error.message}`);
        }
    }

    /**
     * Invalidate cache for a specific key
     * @param {string} key - Key to invalidate
     */
    invalidateCache(key) {
        this.articleCache.delete(key);
        if (key === 'SYSTEM_INDEX_LIST') {
            this.indexCache = null;
        }
    }

    /**
     * Clear all caches
     */
    clearCache() {
        this.articleCache.clear();
        this.indexCache = null;
        this.indexCacheTime = 0;
    }

    // Admin Management Methods
    async getAdmins() {
        return await this.get('SYSTEM_ADMINS', true) || [];
    }

    async saveAdmin(adminData) {
        const admins = await this.getAdmins();
        const existingIndex = admins.findIndex(admin => admin.id === adminData.id);
        
        if (existingIndex >= 0) {
            admins[existingIndex] = adminData;
        } else {
            admins.push(adminData);
        }
        
        await this.put('SYSTEM_ADMINS', admins);
        return adminData.id;
    }

    async deleteAdmin(adminId) {
        const admins = await this.getAdmins();
        const filtered = admins.filter(admin => admin.id !== adminId);
        await this.put('SYSTEM_ADMINS', filtered);
    }

    async getAdminByUsername(username) {
        const admins = await this.getAdmins();
        return admins.find(admin => admin.username === username);
    }

    async getAdminById(id) {
        const admins = await this.getAdmins();
        return admins.find(admin => admin.id === id);
    }

    async verifyAdmin(username, password) {
        const admin = await this.getAdminByUsername(username);
        if (!admin) return null;
        
        if (admin.password === password && admin.status === 'active') {
            return admin;
        }
        return null;
    }

    async initializeDefaultAdmin() {
        const admins = await this.getAdmins();
        if (admins.length === 0) {
            const defaultAdmin = {
                id: this.generateId(),
                username: 'admin',
                password: 'admin',
                email: 'admin@example.com',
                role: 'superadmin',
                status: 'active',
                createdAt: new Date().toISOString(),
                lastLogin: null
            };
            await this.saveAdmin(defaultAdmin);
            console.log('Default admin created:', defaultAdmin.username);
        }
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    async saveMedia({ filename, contentType, data, size }) {
        const id = this.generateId();
        const record = { id, filename, contentType, data, size, uploadedAt: new Date().toISOString() };
        await this.put(`MEDIA_${id}`, record);
        const index = await this.get('MEDIA_INDEX', true) || [];
        const { data: _d, ...meta } = record;
        index.unshift(meta);
        await this.put('MEDIA_INDEX', index);
        return id;
    }

    async getMedia(id) {
        return await this.get(`MEDIA_${id}`, true);
    }

    /**
     * List all articles with caching
     * @returns {Promise<Array>} - Array of articles
     */
    async listArticles() {
        try {
            // Check cache first
            const now = Date.now();
            if (this.indexCache && (now - this.indexCacheTime) < this.cacheTimeout) {
                return this.indexCache;
            }

            const articles = await this.get('SYSTEM_INDEX_LIST', true) || [];
            const result = articles.map(article => ({
                status: 'published',
                ...article
            }));

            // Update cache
            this.indexCache = result;
            this.indexCacheTime = now;

            return result;
        } catch (error) {
            console.error('Error listing articles:', error);
            return [];
        }
    }

    /**
     * List articles with pagination
     * @param {number} page - Page number (1-based)
     * @param {number} pageSize - Number of articles per page
     * @param {string} status - Filter by status ('published', 'draft', or 'all')
     * @returns {Promise<Object>} - Paginated result with articles and metadata
     */
    async listArticlesPaginated(page = 1, pageSize = OPT.pageSize, status = 'published') {
        try {
            let articles = await this.listArticles();

            // Filter by status
            if (status === 'published') {
                articles = articles.filter(a => a.status !== 'draft');
            } else if (status === 'draft') {
                articles = articles.filter(a => a.status === 'draft');
            }

            const totalArticles = articles.length;
            const totalPages = Math.ceil(totalArticles / pageSize);
            const validPage = Math.max(1, Math.min(page, totalPages || 1));
            const startIndex = (validPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const paginatedArticles = articles.slice(startIndex, endIndex);

            return {
                articles: paginatedArticles,
                pagination: {
                    page: validPage,
                    pageSize,
                    totalArticles,
                    totalPages,
                    hasNextPage: validPage < totalPages,
                    hasPrevPage: validPage > 1
                }
            };
        } catch (error) {
            console.error('Error in paginated listing:', error);
            return {
                articles: [],
                pagination: {
                    page: 1,
                    pageSize,
                    totalArticles: 0,
                    totalPages: 0,
                    hasNextPage: false,
                    hasPrevPage: false
                }
            };
        }
    }

    /**
     * Get article with caching
     * @param {string} id - Article ID
     * @returns {Promise<Object|null>} - Article or null
     */
    async getArticle(id) {
        try {
            // Check cache first
            if (this.articleCache.has(id)) {
                return this.articleCache.get(id);
            }

            const article = await this.get(id, true);
            
            if (article) {
                this.articleCache.set(id, article);
            }

            return article;
        } catch (error) {
            console.error(`Error getting article ${id}:`, error);
            return null;
        }
    }

    /**
     * Get multiple articles by IDs (optimized batch fetch)
     * @param {string[]} ids - Array of article IDs
     * @returns {Promise<Array>} - Array of articles
     */
    async getArticlesBatch(ids) {
        try {
            const uncachedIds = ids.filter(id => !this.articleCache.has(id));
            
            if (uncachedIds.length > 0) {
                const fetched = await this.getMultiple(uncachedIds, true);
                fetched.forEach((article, id) => {
                    this.articleCache.set(id, article);
                });
            }

            return ids
                .map(id => this.articleCache.get(id))
                .filter(article => article !== undefined);
        } catch (error) {
            console.error('Error in batch fetch:', error);
            return [];
        }
    }

    async saveArticle(article) {
        try {
            if (!article.id) {
                const currentNum = parseInt(await this.get('SYSTEM_INDEX_NUM')) || 0;
                article.id = (currentNum + 1).toString().padStart(6, '0');
                await this.put('SYSTEM_INDEX_NUM', (currentNum + 1).toString());
            }

            // Auto-generate slug from title if permalink is empty
            if (!article.permalink && article.title) {
                article.permalink = generateSlug(article.title);
                // Ensure uniqueness by checking existing articles
                const existing = await this.listArticles();
                let basePermalink = article.permalink;
                let counter = 1;
                while (existing.some(a => a.permalink === article.permalink && a.id !== article.id)) {
                    article.permalink = `${basePermalink}-${counter}`;
                    counter++;
                }
            }

            if (!article.status) {
                article.status = 'published';
            }
            
            article.contentMarkdown = article.content || article.contentMarkdown || '';
        
            const plainText = this.stripMarkdown(article.contentMarkdown);
            article.excerpt = plainText.substring(0, OPT.readMoreLength) + (plainText.length > OPT.readMoreLength ? '...' : '');

            await this.put(article.id, article);

            const index = await this.listArticles();
            const existingIndex = index.findIndex(item => item.id === article.id);
            
            const indexItem = {
                id: article.id,
                title: article.title,
                img: article.img || '',
                permalink: article.permalink,
                createDate: article.createDate,
                label: article.label,
                excerpt: article.excerpt,
                status: article.status
            };

            if (existingIndex >= 0) {
                index[existingIndex] = indexItem;
            } else {
                index.unshift(indexItem);
            }

            index.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
            await this.put('SYSTEM_INDEX_LIST', index);

            return article.id;
        } catch (error) {
            console.error('Error saving article:', error);
            throw new Error(`Failed to save article: ${error.message}`);
        }
    }

    async deleteArticle(id) {
        try {
            await this.delete(id);
            const index = await this.listArticles();
            const filtered = index.filter(item => item.id !== id);
            await this.put('SYSTEM_INDEX_LIST', filtered);
        } catch (error) {
            console.error('Error deleting article:', error);
            throw new Error(`Failed to delete article: ${error.message}`);
        }
    }

    async listPublishedArticles() {
        try {
            const articles = await this.listArticles();
            return articles.filter(article => article.status !== 'draft');
        } catch (error) {
            console.error('Error listing published articles:', error);
            return [];
        }
    }

    async listDraftArticles() {
        try {
            const articles = await this.listArticles();
            return articles.filter(article => article.status === 'draft');
        } catch (error) {
            console.error('Error listing draft articles:', error);
            return [];
        }
    }

    async getArticleByPermalink(permalink) {
        try {
            const articles = await this.listArticles();
            const articleIndex = articles.find(a => a.permalink === permalink);
            
            if (!articleIndex) {
                return null;
            }
            
            const fullArticle = await this.getArticle(articleIndex.id);
            if (!fullArticle) {
                return null;
            }
            
            return {
                ...fullArticle,
                status: articleIndex.status || fullArticle.status || 'published'
            };
        } catch (error) {
            console.error('Error getting article by permalink:', error);
            return null;
        }
    }

    /**
     * Export all articles with optimized batch fetching
     * @returns {Promise<Array>} - Array of full articles
     */
    async exportArticles() {
        try {
            const articles = await this.listArticles();
            const ids = articles.map(a => a.id);
            return await this.getArticlesBatch(ids);
        } catch (error) {
            console.error('Error exporting articles:', error);
            return [];
        }
    }

    /**
     * Import articles from exported data
     * @param {Array} articlesData - Array of article data
     * @returns {Promise<Object>} - Import results
     */
    async importArticles(articlesData) {
        let imported = 0;
        let errors = [];
        
        for (const articleData of articlesData) {
            try {
                if (!articleData.id) {
                    const currentNum = parseInt(await this.get('SYSTEM_INDEX_NUM')) || 0;
                    articleData.id = (currentNum + 1).toString().padStart(6, '0');
                    await this.put('SYSTEM_INDEX_NUM', (currentNum + 1).toString());
                }
                
                await this.saveArticle(articleData);
                imported++;
            } catch (error) {
                errors.push({
                    title: articleData.title || 'Unknown',
                    error: error.message
                });
            }
        }
        
        return { imported, errors };
    }

    /**
     * Get all categories with counts
     * @returns {Promise<Object>} - Object with category names as keys and counts as values
     */
    async getCategories() {
        try {
            const articles = await this.listPublishedArticles();
            const categories = {};
            
            articles.forEach(article => {
                if (article.label) {
                    categories[article.label] = (categories[article.label] || 0) + 1;
                }
            });
            
            return categories;
        } catch (error) {
            console.error('Error getting categories:', error);
            return {};
        }
    }

    /**
     * Fetch theme template with caching and error handling
     * @param {string} templateName - Template name
     * @returns {Promise<string>} - Template HTML
     */
    async fetchThemeTemplate(templateName) {
        const html = TEMPLATES[templateName];
        if (!html) throw new Error(`Template not found: ${templateName}`);
        return html;
    }

    stripMarkdown(markdown) {
        if (!markdown) return '';
        
        let plainText = markdown;
        
        plainText = plainText.replace(/```[\s\S]*?```/g, '');
        plainText = plainText.replace(/`([^`]+)`/g, '$1');
        plainText = plainText.replace(/^#{1,6}\s+/gm, '');
        plainText = plainText.replace(/^[-*_]{3,}\s*$/gm, '');
        plainText = plainText.replace(/^\s*>+/gm, '');
        plainText = plainText.replace(/(\*\*|__)(.*?)\1/g, '$2');
        plainText = plainText.replace(/(\*|_)(.*?)\1/g, '$2');
        plainText = plainText.replace(/~~(.*?)~~/g, '$1');
        plainText = plainText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        plainText = plainText.replace(/!\[([^\]]+)\]\([^)]+\)/g, '$1');
        plainText = plainText.replace(/\[([^\]]+)\]\[.*?\]/g, '$1');
        plainText = plainText.replace(/^\s*[-*+]\s+/gm, '');
        plainText = plainText.replace(/^\s*\d+\.\s+/gm, '');
        plainText = plainText.replace(/\|.*?\|/g, '');
        plainText = plainText.replace(/[-:|]+/g, '');
        plainText = plainText.replace(/\n+/g, ' ');
        plainText = plainText.replace(/\s+/g, ' ');
        plainText = plainText.trim();
        plainText = plainText.replace(/^[\s#>*\-+]*/, '');
        
        return plainText;
    }

    escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    renderTemplate(template, data) {
        let html = template;
        
        for (const [key, value] of Object.entries(data)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            const replacement = key === 'content' ? value : this.escapeHtml(value.toString());
            html = html.replace(regex, replacement || '');
        }
        
        if (data.img) {
            html = html.replace(/{{#img}}([\s\S]*?){{\/img}}/g, '$1');
        } else {
            html = html.replace(/{{#img}}[\s\S]*?{{\/img}}/g, '');
        }
        
        html = html.replace(/{{[^}]*}}/g, '');
        
        return html;
    }
}

const blog = new Blog();

// Simple authentication function
function authenticate(request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return null;
    }

    try {
        const base64 = authHeader.substring(6);
        const credentials = atob(base64).split(':');
        return credentials;
    } catch (error) {
        return null;
    }
}

// Check if user is authenticated
async function isAuthenticated(request) {
    const credentials = authenticate(request);
    if (!credentials) return false;
    
    const [username, password] = credentials;
    const admin = await blog.verifyAdmin(username, password);
    return !!admin;
}

// Check if user is superadmin
async function isSuperAdmin(request) {
    const credentials = authenticate(request);
    if (!credentials) return false;
    
    const [username, password] = credentials;
    const admin = await blog.verifyAdmin(username, password);
    return admin && admin.role === 'superadmin';
}

export default {
    async fetch(request, env, ctx) {
        blog.setKV(env.BLOG_STORE);
        
        // Initialize default admin if none exists
        await blog.initializeDefaultAdmin();
        
        const url = new URL(request.url);
        const path = url.pathname;

        const themeParam = url.searchParams.get('theme');
        if (themeParam) {
            OPT.themeURL = `https://raw.githubusercontent.com/amber-color/cloudflare-workers-blog/main/themes/${themeParam}/`;
        }

        // Check authentication for admin routes
        if (path.startsWith('/admin') || path.startsWith('/api/admins') || path === '/api/upload') {
            const authenticated = await isAuthenticated(request);
            if (!authenticated) {
                return new Response('Authentication required', {
                    status: 401,
                    headers: {
                        'WWW-Authenticate': 'Basic realm="Blog Admin", charset="UTF-8"',
                        'Content-Type': 'text/plain'
                    }
                });
            }
        }

        if (path.startsWith('/api/')) {
            return handleAPI(request, path);
        }

        if (path.startsWith('/media/')) {
            const id = path.slice(7);
            if (!id) return new Response('Not found', { status: 404 });
            const media = await blog.getMedia(id);
            if (!media) return new Response('Not found', { status: 404 });
            const binaryStr = atob(media.data);
            const bytes = new Uint8Array(binaryStr.length);
            for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i);
            return new Response(bytes.buffer, {
                headers: {
                    'Content-Type': media.contentType,
                    'Cache-Control': 'public, max-age=31536000, immutable',
                    'Content-Disposition': `inline; filename="${media.filename}"`
                }
            });
        }

        switch (path) {
            case '/':
                return renderIndex();
            
            case '/admin/':
                return renderAdmin();
            
            case '/admin/edit':
                return renderEdit(url);

            case '/admin/users':
                return renderAdminUsers();

            case '/bookmarks':
                return renderBookmarks();

            case '/rss.xml':
                return generateRSSFeed();

            case '/sitemap.xml':
                return generateSitemap();

            case '/robots.txt':
                return new Response(OPT.robots, {
                    headers: { 'Content-Type': 'text/plain' }
                });

            default:
                if (path.startsWith('/article/')) {
                    return renderArticle(path);
                }
                return render404();
        }

        async function handleAPI(request, path) {
            const method = request.method;

            try {
                // Admin Management API
                if (path === '/api/admins' && method === 'GET') {
                    const isSuper = await isSuperAdmin(request);
                    if (!isSuper) {
                        return jsonResponse({ error: 'Access denied. Superadmin required.' }, 403);
                    }
                    
                    const admins = await blog.getAdmins();
                    // Don't return passwords
                    const safeAdmins = admins.map(admin => ({
                        id: admin.id,
                        username: admin.username,
                        email: admin.email,
                        role: admin.role,
                        status: admin.status,
                        createdAt: admin.createdAt,
                        lastLogin: admin.lastLogin
                    }));
                    
                    return jsonResponse(safeAdmins);
                }

                if (path === '/api/admins' && method === 'POST') {
                    const isSuper = await isSuperAdmin(request);
                    if (!isSuper) {
                        return jsonResponse({ error: 'Access denied. Superadmin required.' }, 403);
                    }
                    
                    const adminData = await request.json();
                    
                    // Validate required fields
                    if (!adminData.username || !adminData.password || !adminData.email) {
                        return jsonResponse({ error: 'Username, password, and email are required' }, 400);
                    }
                    
                    // Check if username already exists
                    const existingAdmin = await blog.getAdminByUsername(adminData.username);
                    if (existingAdmin) {
                        return jsonResponse({ error: 'Username already exists' }, 400);
                    }
                    
                    const newAdmin = {
                        id: blog.generateId(),
                        username: adminData.username,
                        password: adminData.password,
                        email: adminData.email,
                        role: adminData.role || 'admin',
                        status: 'active',
                        createdAt: new Date().toISOString(),
                        lastLogin: null
                    };
                    
                    await blog.saveAdmin(newAdmin);
                    
                    // Return without password
                    const { password: _, ...safeAdmin } = newAdmin;
                    return jsonResponse({ success: true, admin: safeAdmin });
                }

                if (path.match(/^\/api\/admins\/[^\/]+$/) && method === 'PUT') {
                    const isSuper = await isSuperAdmin(request);
                    if (!isSuper) {
                        return jsonResponse({ error: 'Access denied. Superadmin required.' }, 403);
                    }
                    
                    const adminId = path.split('/').pop();
                    const updateData = await request.json();
                    
                    const existingAdmin = await blog.getAdminById(adminId);
                    if (!existingAdmin) {
                        return jsonResponse({ error: 'Admin not found' }, 404);
                    }
                    
                    const updatedAdmin = {
                        ...existingAdmin,
                        ...updateData,
                        id: existingAdmin.id
                    };
                    
                    await blog.saveAdmin(updatedAdmin);
                    
                    const { password: _, ...safeAdmin } = updatedAdmin;
                    return jsonResponse({ success: true, admin: safeAdmin });
                }

                if (path.match(/^\/api\/admins\/[^\/]+$/) && method === 'DELETE') {
                    const isSuper = await isSuperAdmin(request);
                    if (!isSuper) {
                        return jsonResponse({ error: 'Access denied. Superadmin required.' }, 403);
                    }
                    
                    const adminId = path.split('/').pop();
                    
                    const existingAdmin = await blog.getAdminById(adminId);
                    if (!existingAdmin) {
                        return jsonResponse({ error: 'Admin not found' }, 404);
                    }
                    
                    // Get current admin to prevent self-deletion
                    const credentials = authenticate(request);
                    if (credentials) {
                        const [username, password] = credentials;
                        const currentAdmin = await blog.verifyAdmin(username, password);
                        if (currentAdmin && currentAdmin.id === adminId) {
                            return jsonResponse({ error: 'Cannot delete your own account' }, 400);
                        }
                    }
                    
                    await blog.deleteAdmin(adminId);
                    return jsonResponse({ success: true });
                }

                if (path === '/api/admins/change-password' && method === 'POST') {
                    const credentials = authenticate(request);
                    if (!credentials) {
                        return jsonResponse({ error: 'Authentication required' }, 401);
                    }

                    const [username, currentPassword] = credentials;
                    const currentAdmin = await blog.verifyAdmin(username, currentPassword);
                    if (!currentAdmin) {
                        return jsonResponse({ error: 'Authentication failed' }, 401);
                    }

                    const { currentPassword: bodyCurrentPassword, newPassword } = await request.json();

                    if (!bodyCurrentPassword || !newPassword) {
                        return jsonResponse({ error: 'Current password and new password are required' }, 400);
                    }

                    if (currentAdmin.password !== bodyCurrentPassword) {
                        return jsonResponse({ error: 'Current password is incorrect' }, 400);
                    }

                    if (newPassword.length < 6) {
                        return jsonResponse({ error: 'New password must be at least 6 characters' }, 400);
                    }

                    const updatedAdmin = { ...currentAdmin, password: newPassword };
                    await blog.saveAdmin(updatedAdmin);

                    return jsonResponse({ success: true, message: 'Password changed successfully' });
                }

                // Articles API (existing endpoints)
                if (path === '/api/articles' && method === 'GET') {
                    const showDrafts = url.searchParams.get('drafts') === 'true';
                    const page = parseInt(url.searchParams.get('page')) || 1;
                    const pageSize = parseInt(url.searchParams.get('pageSize')) || OPT.pageSize;
                    const paginate = url.searchParams.get('paginate') === 'true';
                    
                    let result;
                    if (paginate) {
                        // Return paginated results
                        const status = showDrafts ? 'draft' : 'published';
                        result = await blog.listArticlesPaginated(page, pageSize, status);
                        return jsonResponse(result);
                    } else {
                        // Return all results (backward compatible)
                        if (showDrafts) {
                            result = await blog.listDraftArticles();
                        } else {
                            result = await blog.listPublishedArticles();
                        }
                        return jsonResponse(result);
                    }
                }

                // Generate slug API endpoint
                if (path === '/api/generate-slug' && method === 'POST') {
                    try {
                        const { title } = await request.json();
                        if (!title) {
                            return jsonResponse({ error: 'Title is required' }, 400);
                        }
                        const slug = generateSlug(title);
                        
                        // Check if slug already exists
                        const articles = await blog.listArticles();
                        let finalSlug = slug;
                        let counter = 1;
                        while (articles.some(a => a.permalink === finalSlug)) {
                            finalSlug = `${slug}-${counter}`;
                            counter++;
                        }
                        
                        return jsonResponse({ slug: finalSlug });
                    } catch (error) {
                        return jsonResponse({ error: 'Failed to generate slug' }, 500);
                    }
                }

                if (path === '/api/articles' && method === 'POST') {
                    const article = await request.json();
                    const id = await blog.saveArticle(article);
                    return jsonResponse({ success: true, id: id });
                }

                if (path.match(/^\/api\/articles\/[^\/]+$/) && method === 'GET') {
                    const permalink = path.split('/').pop();
                    const article = await blog.getArticleByPermalink(permalink);
                    
                    if (!article) {
                        return jsonResponse({ error: 'Article not found' }, 404);
                    }
                    
                    // Check if user is authenticated for draft access
                    const isAdmin = await isAuthenticated(request);
                    if (!isAdmin && article.status === 'draft') {
                        return jsonResponse({ error: 'Article not found' }, 404);
                    }
                    
                    return jsonResponse(article);
                }

                if (path.match(/^\/api\/articles\/[^\/]+$/) && method === 'PUT') {
                    const permalink = path.split('/').pop();
                    const articleData = await request.json();
                    
                    const existingArticle = await blog.getArticleByPermalink(permalink);
                    
                    if (!existingArticle) {
                        return jsonResponse({ error: 'Article not found' }, 404);
                    }
                    
                    const updatedArticle = {
                        ...existingArticle,
                        ...articleData,
                        id: existingArticle.id
                    };
                    
                    await blog.saveArticle(updatedArticle);
                    return jsonResponse({ success: true });
                }

                if (path.match(/^\/api\/articles\/[^\/]+$/) && method === 'DELETE') {
                    const permalink = path.split('/').pop();
                    const article = await blog.getArticleByPermalink(permalink);
                    
                    if (!article) {
                        return jsonResponse({ error: 'Article not found' }, 404);
                    }
                    
                    await blog.deleteArticle(article.id);
                    return jsonResponse({ success: true });
                }

                // Export/Import and other existing APIs...
                if (path === '/api/export' && method === 'GET') {
                    const articles = await blog.exportArticles();
                    const exportData = JSON.stringify(articles, null, 2);
                    return new Response(exportData, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Disposition': `attachment; filename="blog-export-${new Date().toISOString().split('T')[0]}.json"`
                        }
                    });
                }

                if (path === '/api/import' && method === 'POST') {
                    const articlesData = await request.json();
                    
                    if (!Array.isArray(articlesData)) {
                        return jsonResponse({ error: 'Invalid import data. Expected array of articles.' }, 400);
                    }
                    
                    const result = await blog.importArticles(articlesData);
                    
                    return jsonResponse({
                        success: true,
                        imported: result.imported,
                        errors: result.errors,
                        message: `Successfully imported ${result.imported} articles${result.errors.length > 0 ? ` with ${result.errors.length} errors` : ''}`
                    });
                }

                if (path === '/api/categories' && method === 'GET') {
                    const categories = await blog.getCategories();
                    return jsonResponse(categories);
                }

                if (path === '/api/debug' && method === 'GET') {
                    const index = await blog.listArticles();
                    const allArticles = [];
                    
                    for (const item of index) {
                        const fullArticle = await blog.getArticle(item.id);
                        allArticles.push({
                            index: item,
                            full: fullArticle,
                            exists: !!fullArticle
                        });
                    }
                    
                    return jsonResponse({
                        index: index,
                        allArticles: allArticles,
                        total: index.length,
                        systemIndexNum: await blog.get('SYSTEM_INDEX_NUM')
                    });
                }

                if (path === '/api/upload' && method === 'POST') {
                    const formData = await request.formData();
                    const file = formData.get('file');
                    if (!file || typeof file === 'string') {
                        return jsonResponse({ error: 'No file provided' }, 400);
                    }
                    const MAX_BYTES = 10 * 1024 * 1024;
                    if (file.size > MAX_BYTES) {
                        return jsonResponse({ error: 'File exceeds 10 MB limit' }, 413);
                    }
                    const arrayBuffer = await file.arrayBuffer();
                    const bytes = new Uint8Array(arrayBuffer);
                    let binary = '';
                    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
                    const base64Data = btoa(binary);
                    const contentType = file.type || 'application/octet-stream';
                    const id = await blog.saveMedia({ filename: file.name, contentType, data: base64Data, size: file.size });
                    return jsonResponse({ success: true, id, url: `/media/${id}`, filename: file.name, contentType });
                }

                return jsonResponse({ error: 'Not found' }, 404);
            } catch (error) {
                console.error('API Error:', error);
                return jsonResponse({ error: error.message }, 500);
            }
        }

        /**
         * Generate RSS feed with CDATA tags for better content handling
         * @returns {Promise<Response>} - RSS XML response
         */
        async function generateRSSFeed() {
            try {
                const articles = await blog.listPublishedArticles();
                const siteUrl = `https://${OPT.siteDomain}`;
                
                const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/" 
     xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
        <title><![CDATA[${OPT.siteName}]]></title>
        <description><![CDATA[${OPT.siteDescription}]]></description>
        <link>${siteUrl}</link>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <generator>CF Workers Blog</generator>
        <ttl>60</ttl>
        ${articles.map(article => `
        <item>
            <title><![CDATA[${article.title || ''}]]></title>
            <description><![CDATA[${article.excerpt || ''}]]></description>
            <content:encoded><![CDATA[${article.excerpt || ''}]]></content:encoded>
            <link>${siteUrl}/article/${escapeXml(article.permalink)}</link>
            <guid isPermaLink="true">${siteUrl}/article/${escapeXml(article.permalink)}</guid>
            <pubDate>${new Date(article.createDate).toUTCString()}</pubDate>
            <category><![CDATA[${article.label || ''}]]></category>
            <dc:creator><![CDATA[${OPT.siteName}]]></dc:creator>
            ${article.img ? `<enclosure url="${escapeXml(article.img)}" type="image/jpeg" />` : ''}
        </item>
        `).join('')}
    </channel>
</rss>`;
                
                return new Response(rss, {
                    headers: { 
                        'Content-Type': 'application/rss+xml; charset=utf-8',
                        'Cache-Control': 'public, max-age=3600'
                    }
                });
            } catch (error) {
                console.error('Error generating RSS feed:', error);
                return new Response('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Error</title><description>Error generating RSS feed</description></channel></rss>', { 
                    status: 500,
                    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
                });
            }
        }

        async function generateSitemap() {
            try {
                const articles = await blog.listPublishedArticles();
                const siteUrl = `https://${OPT.siteDomain}`;
                
                const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>${siteUrl}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    ${articles.map(article => `
    <url>
        <loc>${siteUrl}/article/${article.permalink}</loc>
        <lastmod>${new Date(article.createDate).toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
        ${article.img ? `
        <image:image>
            <image:loc>${escapeXml(article.img)}</image:loc>
            <image:title>${escapeXml(article.title)}</image:title>
        </image:image>
        ` : ''}
    </url>
    `).join('')}
</urlset>`;
                
                return new Response(sitemap, {
                    headers: { 
                        'Content-Type': 'application/xml; charset=utf-8',
                        'Cache-Control': 'public, max-age=3600'
                    }
                });
            } catch (error) {
                console.error('Error generating sitemap:', error);
                return new Response('Error generating sitemap', { status: 500 });
            }
        }

        function escapeXml(unsafe) {
            if (!unsafe) return '';
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&apos;");
        }

        async function renderIndex() {
            try {
                const template = await blog.fetchThemeTemplate('index');
                const data = {
                    siteName: OPT.siteName,
                    siteDescription: OPT.siteDescription,
                    keyWords: OPT.keyWords,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('Error loading template: ' + error.message, { status: 500 });
            }
        }

        async function renderAdmin() {
            try {
                const template = await blog.fetchThemeTemplate('admin');
                const data = {
                    siteName: OPT.siteName,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('Error loading template: ' + error.message, { status: 500 });
            }
        }

        async function renderAdminUsers() {
            try {
                const template = await blog.fetchThemeTemplate('admin-users');
                const data = {
                    siteName: OPT.siteName,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('Error loading admin users template', { status: 500 });
            }
        }

        async function renderEdit(url) {
            try {
                const template = await blog.fetchThemeTemplate('edit');
                const urlParams = new URLSearchParams(url.search);
                const permalink = urlParams.get('permalink');
                const action = permalink ? 'Edit' : 'New';
                
                const data = {
                    action: action,
                    siteName: OPT.siteName,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('Error loading template: ' + error.message, { status: 500 });
            }
        }

        async function renderBookmarks() {
            try {
                const template = await blog.fetchThemeTemplate('bookmarks');
                const data = {
                    siteName: OPT.siteName,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('Error loading bookmarks page', { status: 500 });
            }
        }

        async function renderArticle(path) {
            try {
                const template = await blog.fetchThemeTemplate('article');
                const permalink = path.split('/').pop();
                const articles = await blog.listPublishedArticles();
                const article = articles.find(a => a.permalink === permalink);
                
                if (!article) {
                    return render404();
                }
                
                const fullArticle = await blog.getArticle(article.id);

                if (!fullArticle) {
                    return render404();
                }

                const data = {
                    title: fullArticle.title,
                    siteName: OPT.siteName,
                    createDate: new Date(fullArticle.createDate).toLocaleDateString(),
                    label: fullArticle.label,
                    img: fullArticle.img || '',
                    content: fullArticle.contentMarkdown || fullArticle.content,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('Error loading template: ' + error.message, { status: 500 });
            }
        }

        async function render404() {
            try {
                const template = await blog.fetchThemeTemplate('404');
                const data = {
                    siteName: OPT.siteName,
                    copyRight: OPT.copyRight,
                    codeBeforHead: OPT.codeBeforHead || '',
                    codeBeforBody: OPT.codeBeforBody || ''
                };
                
                const html = blog.renderTemplate(template, data);
                return new Response(html, {
                    status: 404,
                    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }
                });
            } catch (error) {
                return new Response('404 - Page Not Found', {
                    status: 404,
                    headers: { 'Content-Type': 'text/plain' }
                });
            }
        }

        function jsonResponse(data, status = 200) {
            return new Response(JSON.stringify(data), {
                status: status,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
    }
};
