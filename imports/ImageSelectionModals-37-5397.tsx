import svgPaths from "./svg-pf3xleytej";
import imgImageSearchImage from "figma:asset/cb15f320248d1bb9fb7e1ab1258e04e1b1ad9ae7.png";
import imgImageSearchImage1 from "figma:asset/d3012a7cec33a492c0eb499f94c50d6ea410a930.png";
import imgImageSearchImage2 from "figma:asset/c6a63ca3b2adb275b91dc3f3755c50a7d76c0c93.png";

function DialogTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-[22px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dialog/Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-zinc-900">
        <p className="block leading-[22px] whitespace-pre">Insertar Galería</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <DialogTitle />
    </div>
  );
}

function SimpleBodyTagsModalsHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Simple Body Tags/Modals/Header"
    >
      <Frame1 />
    </div>
  );
}

function ImageSearchImage() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage}')` }}
    />
  );
}

function ImageSearchSource() {
  return (
    <div
      className="absolute bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    />
  );
}

function ImageSearchGridImage() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage />
      <ImageSearchSource />
    </div>
  );
}

function Frame1698() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage />
    </div>
  );
}

function ImageSearchImage1() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage1}')` }}
    />
  );
}

function ImageSearchSource1() {
  return (
    <div
      className="absolute bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    />
  );
}

function ImageSearchGridImage1() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage1 />
      <ImageSearchSource1 />
    </div>
  );
}

function Frame1705() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage1 />
    </div>
  );
}

function ImageSearchImage2() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage2}')` }}
    />
  );
}

function ImageSearchSource2() {
  return (
    <div
      className="absolute bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    />
  );
}

function ImageSearchGridImage2() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage2 />
      <ImageSearchSource2 />
    </div>
  );
}

function Frame1704() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage2 />
    </div>
  );
}

function ImageSearchGridImage3() {
  return (
    <div
      className="bg-[rgba(204,204,204,0.4)] h-[120px] shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    />
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="plus">
          <path
            d={svgPaths.p21c8000}
            id="Vector"
            stroke="var(--stroke-0, #18181B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.875"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-4"
      data-name="Icon Container"
    >
      <Plus />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[13px] text-left text-nowrap text-zinc-900">
        <p className="block leading-[22px] whitespace-pre">Añadir imágen</p>
      </div>
      <IconContainer6 />
    </div>
  );
}

function UnstyledButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip pl-2.5 pr-2 py-[5px] relative shrink-0"
      data-name="UnstyledButton"
    >
      <Content1 />
    </div>
  );
}

function ButtonOutlined() {
  return (
    <div
      className="absolute bg-[#ffffff] left-1/2 rounded-lg top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Button/Outlined"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
        <UnstyledButton1 />
      </div>
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame1706() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage3 />
      <ButtonOutlined />
    </div>
  );
}

function Frame1917() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame1698 />
      <Frame1705 />
      <Frame1704 />
      <Frame1706 />
    </div>
  );
}

function Frame1700() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 shrink-0" />
  );
}

function Frame1906() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
      <Frame1917 />
      <Frame1700 />
    </div>
  );
}

function Frame1785() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-center justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full">
      <Frame1906 />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="x">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="x">
          <path
            d={svgPaths.p26740b90}
            id="Vector"
            stroke="var(--stroke-0, #18181B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.875"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-4"
      data-name="Icon Container"
    >
      <X />
    </div>
  );
}

function UnstyledIconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0"
      data-name="UnstyledIconButton"
    >
      <IconContainer7 />
    </div>
  );
}

function IconButtonGhost() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[756px] p-0 rounded-md top-2"
      data-name="IconButton/Ghost"
    >
      <UnstyledIconButton />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-none whitespace-pre">
          Descripción de galeria
        </p>
      </div>
    </div>
  );
}

function InputText2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputText"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(24,24,27,0.45)] text-left w-full">
        <p className="block leading-[20px]">Descripción de galeria</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-0 py-3 relative shrink-0 w-full"
      data-name="Container"
    >
      <InputText2 />
    </div>
  );
}

function Input2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TextFieldOutlined1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text Field/Outlined"
    >
      <Label1 />
      <Input2 />
    </div>
  );
}

function PieDeFoto() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Pie de foto"
    >
      <TextFieldOutlined1 />
    </div>
  );
}

function Frame2075() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <PieDeFoto />
    </div>
  );
}

function Frame1777() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Horizontal</p>
      </div>
    </div>
  );
}

function Frame1781() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <Frame1777 />
    </div>
  );
}

function Frame1543() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[0.661px] items-start justify-start p-0 relative shrink-0 w-[23.47px]">
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-[19.172px]" />
    </div>
  );
}

function Frame1544() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[0.661px] h-[5.95px] items-start justify-start p-0 relative shrink-0 w-[23.965px]">
      <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[22.147px]" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[23.8px]" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[19.503px]" />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[1.556px] items-start justify-center max-w-[25.436px] pb-[6.222px] pt-[3.111px] px-0 relative shrink-0"
      data-name="Header"
    >
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.322px] rounded-[1.273px] shrink-0 w-[16.197px]" />
      <Frame1543 />
      <Frame1544 />
    </div>
  );
}

function FElconfidencialCom2Foriginal2Fea72F1032F7E02Fea71037E008Fc4D20Fa89Fb3F319555BJpg() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[rgba(204,204,204,0.4)] h-7 ml-0 mt-0 overflow-clip relative rounded-[2.545px] w-[37.333px]"
      data-name="f.elconfidencial.com%2Foriginal%2Fea7%2F103%2F7e0%2Fea71037e008fc4d20fa89fb3f319555b.jpg"
    >
      <div
        className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[10.182px] text-left text-nowrap text-zinc-900"
        style={{ top: "calc(50% - 7px)", left: "calc(50% - 8.596px)" }}
      >
        <p className="block leading-[14px] whitespace-pre">4:3</p>
      </div>
    </div>
  );
}

function Group1316() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] order-1 place-items-start relative shrink-0 w-full">
      <FElconfidencialCom2Foriginal2Fea72F1032F7E02Fea71037E008Fc4D20Fa89Fb3F319555BJpg />
    </div>
  );
}

function Figure() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse gap-[0.452px] h-7 items-start justify-start p-0 relative shrink-0 w-[37.333px]"
      data-name="Figure"
    >
      <Group1316 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.111px] items-start justify-end p-0 relative shrink-0"
      data-name="Container"
    >
      <Header />
      <Figure />
    </div>
  );
}

function Frame1779() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <Frame1781 />
      <Container5 />
    </div>
  );
}

function Frame1778() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
      <Frame1779 />
    </div>
  );
}

function CropMenuAspectRatio() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="Crop/Menu/Aspect Ratio"
    >
      <Frame1778 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="chevron-down">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #18181B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.875"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-5"
      data-name="Icon Container"
    >
      <ChevronDown1 />
    </div>
  );
}

function Active1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-0 py-2 relative shrink-0"
      data-name="Active"
    >
      <CropMenuAspectRatio />
      <IconContainer12 />
    </div>
  );
}

function Input3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative rounded-md shrink-0"
      data-name="Input"
    >
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-md" />
      <Active1 />
    </div>
  );
}

function CropMenu() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow h-[66px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Crop/Menu"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-none whitespace-pre">Apertura galería</p>
      </div>
      <Input3 />
    </div>
  );
}

function UnstyledButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0"
      data-name="UnstyledButton"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Insertar Galería</p>
      </div>
    </div>
  );
}

function ButtonContained1() {
  return (
    <div
      className="bg-zinc-900 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0"
      data-name="Button/Contained"
    >
      <UnstyledButton2 />
    </div>
  );
}

function ActionsContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-end justify-between p-0 relative shrink-0 w-[764px]"
      data-name="actions-container"
    >
      <CropMenu />
      <ButtonContained1 />
    </div>
  );
}

export default function ImageSelectionModals() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] size-full"
      data-name="Image Selection Modals"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative size-full">
          <SimpleBodyTagsModalsHeader />
          <Frame1785 />
          <IconButtonGhost />
          <Frame2075 />
          <ActionsContainer />
        </div>
      </div>
    </div>
  );
}