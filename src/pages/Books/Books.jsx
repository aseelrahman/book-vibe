import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");

  console.log(sortingType);
  
  return (
      <div
      className="container mx-auto my-5
      "
      >
        {/* sorting */}
      <div className="flex justify-center my-5
      ">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by {sortingType}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType('page')}>
              <a>Page</a>
            </li>
            <li onClick={() => setSortingType('rating')}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs */}
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
