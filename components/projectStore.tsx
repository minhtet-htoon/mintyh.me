import { IProps } from "../pages/projects";
import { Browser } from "tabler-icons-react";

export const Projects: IProps = {
  categories: [
    {
      name: "Web and Javascript",
      icon: <Browser />,
      projects: [
        {
          name: "OAuth Bot",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit urna sit amet convallis vestibulum. Curabitur est eros, venenatis vel mollis eu, suscipit eu turpis. Curabitur efficitur diam quam, non mattis justo egestas nec. In hac habitasse platea dictumst. Duis sit amet finibus odio. Etiam pulvinar, mauris ut rhoncus lacinia, ex odio volutpat arcu, condimentum hendrerit purus sapien eget felis. Sed molestie dictum justo. Aenean tempus, nisi egestas varius fringilla, ex nisi imperdiet sem, ac rutrum sapien orci sed velit. Nam dolor lacus, sollicitudin vel diam viverra, molestie congue ligula. Pellentesque ornare laoreet magna. Pellentesque vel velit at risus viverra semper. Nam varius congue nisl at finibus. Pellentesque efficitur lacus ut magna imperdiet consectetur.",
          image: "",
          link: "https://github.com/minhtet-htoon/verifier",
          status: 0,
          stage: 6
        }
      ]
    }
  ]
};
