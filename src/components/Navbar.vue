<script>
export default {
    name: 'Navbar',
    props: {
        msg: String,
    },
    setup(props) {
        return {
            props
        }
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo-blue.png" alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style>
    .navbar {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .navbar-nav,
    .mr-auto {
            flex: 1;
            margin: auto !important;
            display: flex;
            justify-content: flex-end;
            }
</style>
```