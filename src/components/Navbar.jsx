

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-light border-bottom ">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="#">Resume Builder</a>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-info" aria-current="page" href="#">Resume Templates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">My Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
