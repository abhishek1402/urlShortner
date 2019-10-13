
import urlRoute from "../services/url/url.route";
import { RouterClass } from "./router.class";

class AppRoutes extends RouterClass {
    constructor() {
       super();
    }
    public initializeRoute(): void {
        this.router.use("/url", urlRoute);
    }
}

export default new AppRoutes().router;
