import React from "react";

const Week = () => {
  return (
    <>
      <h2>Mi Semana</h2>
      <form class="week-container">
      <div class="day-container">
        <label for="day">Lunes</label>
        <input type="checkbox" name="day" id="day" />
        </div>
        <div class="day-container">
        <label for="day">Martes</label>
        <input type="checkbox" name="day" id="day" />
        </div>
        <div class="day-container">
        <label for="day">Miércoles</label>
        <input type="checkbox" name="day" id="day" />
        </div>
        <div class="day-container">
        <label for="day">Jueves</label>
        <input type="checkbox" name="day" id="day" />
        </div>
        <div class="day-container">
        <label for="day">Viernes</label>
        <input type="checkbox" name="day" id="day" />
        </div>
        <div class="day-container">
        <label for="day">Sábado</label>
        <input type="checkbox" name="day" id="day" />
        </div>
        <div class="day-container">
        <label for="day">Domingo</label>
        <input type="checkbox" name="day" id="day" />
        </div>
      </form>
    </>
  );
};

export default Week;
