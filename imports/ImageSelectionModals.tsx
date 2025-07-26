import svgPaths from "./svg-ivlfbexh53";
import imgImageSearchImage from "figma:asset/cb15f320248d1bb9fb7e1ab1258e04e1b1ad9ae7.png";
import imgDownload1 from "figma:asset/a8f336c2936af48e2bc58a33796bb47af2823448.png";
import imgImageSearchImage1 from "figma:asset/08b907e77d5ae980e2451eac5b0400be8f7e8e95.png";
import imgImageSearchImage2 from "figma:asset/d3012a7cec33a492c0eb499f94c50d6ea410a930.png";
import imgImageSearchImage3 from "figma:asset/5462d66edbff49c71f9c3c8f86e1179a805497c2.png";
import imgDownload2 from "figma:asset/fb310b195bafe5416e5781ab0125399b8f8c3897.png";
import imgImageSearchImage4 from "figma:asset/4f11d24db5fe278acb507850605c0ea11f9ac4c5.png";
import imgImageSearchImage5 from "figma:asset/c6a63ca3b2adb275b91dc3f3755c50a7d76c0c93.png";
import imgImageSearchImage6 from "figma:asset/2f83b3471399972892e32d7af78308a7fce67c23.png";
import imgDownload3 from "figma:asset/d496a5329d19720695471c6043c0243ccf5450fe.png";
import imgImageSearchImage7 from "figma:asset/f4ce25ef8e5f207462c5f81355888963d03bc7f1.png";
import imgImageSearchImage8 from "figma:asset/46cc8828839e4c1405220875e5b3c277a4b552bc.png";
import imgImageSearchImage9 from "figma:asset/d42b2902cdc7e9155031f06155cc5a445bd8ad8e.png";
import imgImageSearchImage10 from "figma:asset/c5bb875639cdd114da8974d7f6966c5c89c2a72b.png";
import imgImageSearchImage11 from "figma:asset/a32a6e35d40b81538471dfdeb49402097bca035f.png";

function DialogTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-[22px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dialog/Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-zinc-900">
        <p className="block leading-[22px] whitespace-pre">Buscar multimedia</p>
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

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-none whitespace-pre">
          Buscar en archivo fotográfico
        </p>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputText"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-zinc-900 w-full">
        <p className="block leading-[20px]">Flores</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-0 py-3 relative shrink-0 w-full"
      data-name="Content"
    >
      <InputText />
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function TextFieldOutlined() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Field/Outlined"
    >
      <Label />
      <Input />
    </div>
  );
}

function InputText1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="InputText"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-zinc-900 w-full">
        <p className="block leading-[20px]">Reuters, Getty</p>
      </div>
    </div>
  );
}

function ChevronDown() {
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

function IconContainer5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-4"
      data-name="Icon Container"
    >
      <ChevronDown />
    </div>
  );
}

function Active() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-0 py-3 relative shrink-0 w-full"
      data-name="Active"
    >
      <InputText1 />
      <IconContainer5 />
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative w-full">
          <Active />
        </div>
      </div>
    </div>
  );
}

function SelectOutlined() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[194px]"
      data-name="Select/Outlined"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-none whitespace-pre">Fuente</p>
      </div>
      <Input1 />
    </div>
  );
}

function UnstyledButton() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-[22px] py-[9px] relative shrink-0"
      data-name="UnstyledButton"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[15px] text-left text-nowrap text-zinc-900">
        <p className="block leading-[26px] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function ButtonContained() {
  return (
    <div
      className="bg-[#cccccc] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0"
      data-name="Button/Contained"
    >
      <UnstyledButton />
    </div>
  );
}

function Frame1708() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-end justify-start p-0 relative shrink-0 w-full">
      <TextFieldOutlined />
      <SelectOutlined />
      <ButtonContained />
    </div>
  );
}

function ImageSearchImage() {
  return (
    <div
      className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[120px] ml-0 mt-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage}')` }}
    />
  );
}

function ImageSearchSource() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-5 ml-0 mt-[100px] overflow-clip relative rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:100%_38.15%,_auto] absolute bg-[#ffffff] bg-[position:0%_50%,_0%_0%] h-5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px]"
        data-name="download 1"
        style={{
          left: "calc(50% + 0.135px)",
          backgroundImage: `url('${imgDownload1}'), none`,
        }}
      />
    </div>
  );
}

function Group1324() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ImageSearchImage />
      <ImageSearchSource />
    </div>
  );
}

function Frame1844() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-1/2 p-[4px] rounded top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute border border-solid border-zinc-900 inset-0 pointer-events-none rounded" />
      <Group1324 />
    </div>
  );
}

function ImageSearchGridImage() {
  return (
    <div
      className="h-[120px] relative rounded shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <Frame1844 />
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
      className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:100%_38.15%,_auto] absolute bg-[#ffffff] bg-[position:0%_50%,_0%_0%] h-5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px]"
        data-name="download 1"
        style={{
          left: "calc(50% + 0.135px)",
          backgroundImage: `url('${imgDownload1}'), none`,
        }}
      />
    </div>
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

function ImageSearchImage2() {
  return (
    <div
      className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[120px] ml-0 mt-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage2}')` }}
    />
  );
}

function ImageSearchSource2() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-5 ml-0 mt-[100px] overflow-clip relative rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:100%_38.15%,_auto] absolute bg-[#ffffff] bg-[position:0%_50%,_0%_0%] h-5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px]"
        data-name="download 1"
        style={{
          left: "calc(50% + 0.135px)",
          backgroundImage: `url('${imgDownload1}'), none`,
        }}
      />
    </div>
  );
}

function Group1325() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ImageSearchImage2 />
      <ImageSearchSource2 />
    </div>
  );
}

function Frame1846() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-1/2 p-[4px] rounded top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute border border-solid border-zinc-900 inset-0 pointer-events-none rounded" />
      <Group1325 />
    </div>
  );
}

function ImageSearchGridImage2() {
  return (
    <div
      className="h-[120px] relative rounded shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <Frame1846 />
    </div>
  );
}

function ImageSearchImage3() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage3}')` }}
    />
  );
}

function ImageSearchSource3() {
  return (
    <div
      className="absolute bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload2}')` }}
      />
    </div>
  );
}

function ImageSearchGridImage3() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage3 />
      <ImageSearchSource3 />
    </div>
  );
}

function Frame1698() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage />
      <ImageSearchGridImage1 />
      <ImageSearchGridImage2 />
      <ImageSearchGridImage3 />
    </div>
  );
}

function ImageSearchImage4() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage4}')` }}
    />
  );
}

function ImageSearchSource4() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:100%_38.15%,_auto] absolute bg-[#ffffff] bg-[position:0%_50%,_0%_0%] h-5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px]"
        data-name="download 1"
        style={{
          left: "calc(50% + 0.135px)",
          backgroundImage: `url('${imgDownload1}'), none`,
        }}
      />
    </div>
  );
}

function ImageSearchGridImage4() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage4 />
      <ImageSearchSource4 />
    </div>
  );
}

function ImageSearchImage5() {
  return (
    <div
      className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[120px] ml-0 mt-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage5}')` }}
    />
  );
}

function ImageSearchSource5() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-5 ml-0 mt-[100px] overflow-clip relative rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:100%_38.15%,_auto] absolute bg-[#ffffff] bg-[position:0%_50%,_0%_0%] h-5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px]"
        data-name="download 1"
        style={{
          left: "calc(50% + 0.135px)",
          backgroundImage: `url('${imgDownload1}'), none`,
        }}
      />
    </div>
  );
}

function Group1326() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ImageSearchImage5 />
      <ImageSearchSource5 />
    </div>
  );
}

function Frame1847() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-1/2 p-[4px] rounded top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute border border-solid border-zinc-900 inset-0 pointer-events-none rounded" />
      <Group1326 />
    </div>
  );
}

function ImageSearchGridImage5() {
  return (
    <div
      className="h-[120px] relative rounded shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <Frame1847 />
    </div>
  );
}

function ImageSearchImage6() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage6}')` }}
    />
  );
}

function ImageSearchSource6() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:contain,_auto] absolute bg-[#ffffff] bg-[position:50%_50%,_0%_0%] bottom-[5%] left-[3.333%] right-[3.333%] top-[5%]"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload3}'), none` }}
      />
    </div>
  );
}

function ImageSearchGridImage6() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage6 />
      <ImageSearchSource6 />
    </div>
  );
}

function ImageSearchImage7() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage7}')` }}
    />
  );
}

function ImageSearchSource7() {
  return (
    <div
      className="absolute bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload2}')` }}
      />
    </div>
  );
}

function ImageSearchGridImage7() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage7 />
      <ImageSearchSource7 />
    </div>
  );
}

function Frame1699() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage4 />
      <ImageSearchGridImage5 />
      <ImageSearchGridImage6 />
      <ImageSearchGridImage7 />
    </div>
  );
}

function ImageSearchImage8() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage8}')` }}
    />
  );
}

function ImageSearchSource8() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:contain,_auto] absolute bg-[#ffffff] bg-[position:50%_50%,_0%_0%] bottom-[5%] left-[3.333%] right-[3.333%] top-[5%]"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload3}'), none` }}
      />
    </div>
  );
}

function ImageSearchGridImage8() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage8 />
      <ImageSearchSource8 />
    </div>
  );
}

function ImageSearchImage9() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage9}')` }}
    />
  );
}

function ImageSearchSource9() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:contain,_auto] absolute bg-[#ffffff] bg-[position:50%_50%,_0%_0%] bottom-[5%] left-[3.333%] right-[3.333%] top-[5%]"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload3}'), none` }}
      />
    </div>
  );
}

function ImageSearchGridImage9() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage9 />
      <ImageSearchSource9 />
    </div>
  );
}

function ImageSearchImage10() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage10}')` }}
    />
  );
}

function ImageSearchSource10() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="[background-size:contain,_auto] absolute bg-[#ffffff] bg-[position:50%_50%,_0%_0%] bottom-[5%] left-[3.333%] right-[3.333%] top-[5%]"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload3}'), none` }}
      />
    </div>
  );
}

function ImageSearchGridImage10() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage10 />
      <ImageSearchSource10 />
    </div>
  );
}

function ImageSearchImage11() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
      data-name="Image Search/Image"
      style={{ backgroundImage: `url('${imgImageSearchImage11}')` }}
    />
  );
}

function ImageSearchSource11() {
  return (
    <div
      className="absolute bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px]"
      data-name="Image Search/Source"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="download 1"
        style={{ backgroundImage: `url('${imgDownload2}')` }}
      />
    </div>
  );
}

function ImageSearchGridImage11() {
  return (
    <div
      className="h-[120px] overflow-clip relative shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage11 />
      <ImageSearchSource11 />
    </div>
  );
}

function Frame1700() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage8 />
      <ImageSearchGridImage9 />
      <ImageSearchGridImage10 />
      <ImageSearchGridImage11 />
    </div>
  );
}

function ImageSearchGridImage12() {
  return (
    <div
      className="bg-[rgba(204,204,204,0.4)] h-[120px] shrink-0 w-[180px]"
      data-name="Image Search/Grid Image"
    />
  );
}

function Frame1701() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <ImageSearchGridImage12 key={i} />
      ))}
    </div>
  );
}

function Frame1845() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-0 py-2 relative shrink-0">
      <Frame1698 />
      <Frame1699 />
      <Frame1700 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame1701 key={i} />
      ))}
    </div>
  );
}

function PhotoGrid() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 h-[321px] items-center justify-start overflow-clip px-1 py-0 relative shrink-0"
      data-name="Photo grid"
    >
      <Frame1845 />
    </div>
  );
}

function ImageSearchImage12() {
  return (
    <div
      className="[background-size:auto,_cover] absolute bg-[position:0%_0%,_50%_50%] left-0 size-[60px] top-[0.159px]"
      data-name="Image Search/Image"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgImageSearchImage}')`,
      }}
    />
  );
}

function ImageSearchGridImage20() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[60px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage12 />
    </div>
  );
}

function ImageSearchImage13() {
  return (
    <div
      className="[background-size:auto,_cover] absolute bg-[position:0%_0%,_50%_50%] h-[60px] left-0 top-0 w-[90px]"
      data-name="Image Search/Image"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgImageSearchImage2}')`,
      }}
    />
  );
}

function ImageSearchGridImage21() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[60px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage13 />
    </div>
  );
}

function ImageSearchImage14() {
  return (
    <div
      className="[background-size:auto,_cover] absolute bg-[position:0%_0%,_50%_50%] h-[60px] left-0 top-0 w-[90px]"
      data-name="Image Search/Image"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgImageSearchImage5}')`,
      }}
    />
  );
}

function ImageSearchGridImage22() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[60px]"
      data-name="Image Search/Grid Image"
    >
      <ImageSearchImage14 />
    </div>
  );
}

function Frame1915() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
      <ImageSearchGridImage20 />
      <ImageSearchGridImage21 />
      <ImageSearchGridImage22 />
    </div>
  );
}

function Frame1916() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1915 />
    </div>
  );
}

function UnstyledButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0"
      data-name="UnstyledButton"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-[24px] whitespace-pre">
          Subir imágen propio
        </p>
      </div>
    </div>
  );
}

function ButtonOutlined() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0"
      data-name="Button/Outlined"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
        <UnstyledButton1 />
      </div>
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-md" />
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
        <p className="block leading-[24px] whitespace-pre">Seleccionar</p>
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

function Frame1911() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <ButtonContained1 />
    </div>
  );
}

function ActionsContainer() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-between min-h-px min-w-px p-0 relative shrink-0"
      data-name="actions-container"
    >
      <ButtonOutlined />
      <Frame1911 />
    </div>
  );
}

function DialogActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Dialog/Actions"
    >
      <ActionsContainer />
    </div>
  );
}

function Frame1906() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <PhotoGrid />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 764 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, #CCCCCC)"
              x2="764"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame1916 />
      <DialogActions />
    </div>
  );
}

function Frame1786() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
      <Frame1708 />
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

function IconContainer6() {
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
      <IconContainer6 />
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

export default function ImageSelectionModals() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] size-full"
      data-name="Image Selection Modals"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative size-full">
          <SimpleBodyTagsModalsHeader />
          <Frame1786 />
          <div className="absolute bg-[#cccccc] h-[42px] left-[782px] rounded-[10px] top-[136px] w-2" />
          <IconButtonGhost />
        </div>
      </div>
    </div>
  );
}