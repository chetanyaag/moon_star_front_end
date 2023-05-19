import ProductPage from "@/component/ProductPage";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import { Box } from "@mui/system";

export default function product() {
    return (<Box>
<ResponsiveAppBar></ResponsiveAppBar>
<Box m={4} marginLeft={10}>

<ProductPage></ProductPage>

</Box>


    </Box>);
}