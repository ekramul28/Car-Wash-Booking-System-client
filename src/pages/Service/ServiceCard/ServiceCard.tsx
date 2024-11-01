import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ServiceDetailsPage from "../ServiceDetailsPage/ServiceDetailsPage";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useCreateSlotsMutation } from "@/redux/features/slots/slots";
import { toast } from "sonner";
import EditService from "../Editservice/EditService";
import { TService } from "@/types/ServiceType";
import { useUpdateServiceMutation } from "@/redux/features/service/serviceApi";
import { Link, useNavigate } from "react-router-dom";

const ProductCard: React.FC<TService> = ({
  image,
  title,
  price,
  duration,
  _id,
  description,
}) => {
  interface ServiceFormData {
    title: string;
    price: string;
    duration: string;
    image: string[];
    message: string;
    description: string;
  }
  const user = useAppSelector(selectCurrentUser);
  const [stateDate, setDate] = useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = useState<string>("09:00");
  const [endTime, setEndTime] = useState<string>("19:00");

  const navigate = useNavigate();

  const [createSlots, { isLoading }] = useCreateSlotsMutation();

  const [UpdateService, { isLoading: UpdateLoading }] =
    useUpdateServiceMutation();

  const handleSubmit = async () => {
    const date: Date | undefined = stateDate;

    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";

    const slotData = {
      service: _id,
      date: formattedDate,
      startTime,
      endTime,
    };
    const result = await createSlots(slotData).unwrap();

    if (result?.success) {
      toast.success("slot Create SuccessFull");
    }
  };

  const onSubmit = async (data: ServiceFormData) => {
    const updateData = {
      data,
      _id,
    };
    const result = await UpdateService(updateData).unwrap();
    if (result?.success) {
      toast.success("Edit Successfull");
    }
  };

  const defaultValues = {
    image,
    title,
    price,
    duration,
    description,
  };

  const handelBooking = () => {
    if (!user?.userId) {
      navigate("/login", { state: { from: `/service/${_id}` } });
    }
  };

  return (
    <Card className="max-w-sm bg-[#1C1F26] text-white">
      <CardHeader>
        <div className="h-[200px]">
          <img
            src={image[0]}
            alt="Product Image"
            width={400}
            height={200}
            className="rounded-md"
          />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="text-lg font-bold">Price: ${price}</div>
        <div className="text-sm">Duration: {duration} Min</div>

        {user?.role === "admin" ? (
          <div className="flex justify-evenly mt-2 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-black hover:bg-slate-400"
                >
                  Create Slot
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full sm:w-[80%] md:top-40 top-40">
                <DialogHeader>
                  <DialogTitle>Create Slot</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "col-span-3 justify-start text-left font-normal",
                            !stateDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {stateDate ? (
                            format(stateDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={stateDate}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="startTime" className="text-right">
                      Start Time
                    </Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={startTime}
                      defaultValue={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="col-span-3"
                    />
                    <Label htmlFor="endTime" className="text-right">
                      End Time
                    </Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={endTime}
                      defaultValue={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleSubmit} type="submit">
                    {isLoading ? "Loading..." : " Create"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button className="w-[80%] bg-white text-black hover:bg-slate-400">
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="h-[80%] overflow-auto">
                <EditService
                  onSubmit={onSubmit}
                  defaultValues={defaultValues}
                  UpdateLoading={UpdateLoading}
                />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button className="w-[80%] bg-white text-black hover:bg-slate-400">
                  See Slot
                </Button>
              </DialogTrigger>
              <DialogContent>
                <ServiceDetailsPage id={_id} role={user?.role} />
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to={`/service/${_id}`}>
              <Button className="bg-white text-black hover:bg-slate-300">
                See Details
              </Button>
            </Link>
            {user?.userId ? (
              <Dialog>
                <DialogTrigger>
                  <Button className="w-[80%] bg-white text-black hover:bg-slate-400">
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <ServiceDetailsPage id={_id} />
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                onClick={handelBooking}
                className="w-[80%] bg-white text-black hover:bg-slate-400"
              >
                Book Now
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
