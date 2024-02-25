import { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import "../../App.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceRangeModal = ({
  value,
  setValue,
  priceRangeModal,
  setIsPriceRangeModal,
  children,
}) => {
  const hasRender = useRef(false);
  const handlePriceRange = (rangeValue) => {
    setValue ? setValue(rangeValue) : null;
    hasRender.current = true;
    // setValue(rangeValue);
  };



  // onChange function

  //   useEffect(() => {
  //     function createslider(element) {
  //       const inputs = element.querySelectorAll("input");

  //       const thumbLeft = element.querySelector(".thumb.left");
  //       const thumbRight = element.querySelector(".thumb.right");
  //       const rangeBetween = element.querySelector(".range-between");
  //       const labelMin = element.querySelector(".range-label-start");
  //       const labelMax = element.querySelector(".range-label-end");

  //       const [inputStart, inputEnd] = inputs;
  //       const min = parseInt(inputStart.value);
  //       const max = parseInt(inputEnd.value);

  //       setStartValueCustomSlider(inputStart, inputEnd, thumbLeft, rangeBetween);
  //       setEndValueCustomSlider(inputEnd, inputStart, thumbRight, rangeBetween);

  //       setEvents(
  //         inputStart,
  //         inputEnd,
  //         thumbLeft,
  //         thumbRight,
  //         labelMin,
  //         labelMax,
  //         rangeBetween
  //       );
  //     }

  //     function setLabelValue(label, input) {
  //       label.innerHTML = `${input.value}`;
  //     }

  //     function setStartValueCustomSlider(inputStart, inputEnd, pseudoEl, range) {
  //       const maximum = Math.min(
  //         parseInt(inputStart.value),
  //         parseInt(inputEnd.value) - 1
  //       );
  //       const percent =
  //         ((maximum - inputStart.min) / (inputStart.max - inputStart.min)) * 100;
  //       pseudoEl.style.left = percent + "%";
  //       range.style.left = percent + "%";
  //     }

  //     function setEndValueCustomSlider(inputEnd, inputStart, pseudoEl, range) {
  //       const minimun = Math.max(
  //         parseInt(inputEnd.value),
  //         parseInt(inputStart.value) + 1
  //       );
  //       const percent =
  //         ((minimun - inputEnd.min) / (inputEnd.max - inputEnd.min)) * 100;
  //       pseudoEl.style.right = 100 - percent + "%";
  //       range.style.right = 100 - percent + "%";
  //     }

  //     function setEvents(
  //       inputStart,
  //       inputEnd,
  //       thumbLeft,
  //       thumbRight,
  //       labelMin,
  //       labelMax,
  //       rangeBetween,
  //       rangesValues
  //     ) {
  //       inputStart.addEventListener("input", () => {
  //         setStartValueCustomSlider(
  //           inputStart,
  //           inputEnd,
  //           thumbLeft,
  //           rangeBetween
  //         );
  //         setLabelValue(labelMin, inputStart);
  //       });

  //       inputEnd.addEventListener("input", () => {
  //         setEndValueCustomSlider(inputEnd, inputStart, thumbRight, rangeBetween);
  //         setLabelValue(labelMax, inputEnd);
  //       });

  //       // add css clases on hover and drag
  //       inputStart.addEventListener("mouseover", function () {
  //         thumbLeft.classList.add("hover");
  //       });
  //       inputStart.addEventListener("mouseout", function () {
  //         thumbLeft.classList.remove("hover");
  //       });
  //       inputStart.addEventListener("mousedown", function () {
  //         thumbLeft.classList.add("active");
  //       });
  //       inputStart.addEventListener("pointerup", function () {
  //         thumbLeft.classList.remove("active");
  //       });

  //       inputEnd.addEventListener("mouseover", function () {
  //         thumbRight.classList.add("hover");
  //       });
  //       inputEnd.addEventListener("mouseout", function () {
  //         thumbRight.classList.remove("hover");
  //       });
  //       inputEnd.addEventListener("mousedown", function () {
  //         thumbRight.classList.add("active");
  //       });
  //       inputEnd.addEventListener("pointerup", function () {
  //         thumbRight.classList.remove("active");
  //       });

  //       // Mobile
  //       inputStart.addEventListener("touchstart", function () {
  //         thumbLeft.classList.add("active");
  //       });
  //       inputStart.addEventListener("touchend", function () {
  //         thumbLeft.classList.remove("active");
  //       });
  //       inputEnd.addEventListener("touchstart", function () {
  //         thumbRight.classList.add("active");
  //       });
  //       inputEnd.addEventListener("touchend", function () {
  //         thumbRight.classList.remove("active");
  //       });
  //     }

  //     const slider = document.querySelector(".range-slider ");
  //     createslider(slider);
  //   }, []);

  return (
    <div>
      <Modal title={"Price Range"} setModal={setIsPriceRangeModal}>
        {/* <div className="wrapper">
          <div className="range-slider">
            <div className="range-labels">
              <span className="range-label range-label-start">0</span>
              <span className="range-label range-label-end">100</span>
            </div>
            <input type="range" min="0" value="0" max="149" name="" id="" />
            <input type="range" min="1" value="150" max="150" name="" id="" />

            <div className="track-wrapper">
              <div className="track"></div>
              <div className="range-between"></div>
              <div className="thumb left"></div>
              <div className="thumb right"></div>
            </div>
          </div>
        </div> */}
        <div className="max-w-[300px] mt-5 mx-auto">
          <div className="flex justify-between">
            <div>
              <span className="text-sm ">Min: {value[0]}</span>
            </div>
            <div>
              <span className="text-sm ">Max: {value[1]}</span>
            </div>
          </div>

          <RangeSlider
            min={300}
            max={1000}
            value={value}
            className={"bg-[rgba(0,0,0,0.05)] !h-[6px] mt-3"}
            onInput={handlePriceRange}
            step={10}
          />
        </div>

        {children}
      </Modal>
    </div>
  );
};

export default PriceRangeModal;
