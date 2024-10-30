import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/user";

const AllUser = () => {
  const { data } = useGetAllUserQuery(undefined);
  const [UpdateUser, { data: updatData }] = useUpdateUserMutation();
  const AllUserFromDb = data?.data;
  console.log(AllUserFromDb);
  console.log({ updatData });
  const handleAdmin = (id: string) => {
    const data = {
      id,
      updateData: { role: "admin" },
    };
    UpdateUser(data);
  };

  const handleUser = (id: string) => {
    const data = {
      id,
      updateData: { role: "user" },
    };
    UpdateUser(data);
  };

  const handleBlock = (id: string) => {
    const data = {
      id,
      updateData: { userStatus: "block" },
    };
    UpdateUser(data);
  };
  const handleUnBlock = (id: string) => {
    const data = {
      id,
      updateData: { userStatus: "in-progress" },
    };
    UpdateUser(data);
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>AllUser</CardTitle>
                  <CardDescription>
                    Manage your AllUser and view their Status performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Role
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>

                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    {AllUserFromDb?.map((user) => (
                      <TableBody key={user._id}>
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={
                                user?.imageUrl ||
                                "https://dummyimage.com/600x400/cccccc/000000&text=No+Image+Available"
                              }
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {user?.email}
                          </TableCell>
                          <TableCell>
                            {user.userStatus === "block" ? (
                              <Badge className="bg-red-500">Block</Badge>
                            ) : (
                              <Badge variant="outline">Active</Badge>
                            )}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {user?.role === "admin" ? (
                              <Badge className="bg-green-500">Admin</Badge>
                            ) : (
                              <Badge variant="outline">user</Badge>
                            )}
                          </TableCell>

                          <TableCell className="hidden md:table-cell">
                            {user?.createdAt?.split("T")[0]}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => handleAdmin(user?._id)}
                                >
                                  MakeAdmin
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleUser(user?._id)}
                                >
                                  MakeUser
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleBlock(user?._id)}
                                >
                                  Block
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleUnBlock(user?._id)}
                                >
                                  UnBlock
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AllUser;
