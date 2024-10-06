import { Drawer , DrawerAction , DrawerClose , DrawerContent , Button } from "keep-react";




let KeepDrawer = () => {
  return (
      <Drawer position='left' >
          <DrawerAction asChild>
              <Button>Left Drawer</Button>
          </DrawerAction>
          <DrawerContent className="fixed top-0 left-0">
              <DrawerClose className='absolute right-5 top-5' />
              <div className='p-5 m-5 w-96'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos eligendi velit nobis vitae tenetur esse facilis. Delectus necessitatibus iusto dolore asperiores aspernatur tempore tenetur, ut odit vero doloremque rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio fuga, aliquid et ducimus suscipit nihil eos voluptatum sunt eveniet, fugiat repellat aperiam repudiandae quisquam ullam beatae atque, non incidunt doloremque!logoText: "Keep",
              </div>
          </DrawerContent>
      </Drawer>
  );
}

export default KeepDrawer