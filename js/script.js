const btn = document.querySelector('#btn');
			const s = document.querySelector('#potolok');
			const sbb = document.querySelector('#floor');
			const sc = document.querySelector('#furniture');
			const sb = document.querySelector('#framework');

			btn.onclick = (event) => {
				event.preventDefault();

				// Стена (framework)
				i = sb.value;
				// пол (floor)
				i1 = sbb.value;
				// потолок (potolok)
				i2 = s.value;
				// мебель (furniture)
				i3 = sc.value;

				// все в бетоне без мебели
				if (i == 1 && i1 == 1 && i2 == 1 && i3 == 1) {
					console.log('все в бетоне без мебели');

					document.images['nam'].src =
						'img_tools/start_img/start_0000.png';
				}

				// все в бетоне с мебелью
				if (i == 1 && i1 == 1 && i2 == 1 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img_tools/start_img/start_0001.png';
                }
                
                //серый потолок, остальное бетон без мебели
                if (i == 1 && i1 == 1 && i2 == 2 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol_beton_potolok_grey/grey potolok 0000.png';
                }
                // серый потолок, остальное бетон с мебелью
                if (i == 1 && i1 == 1 && i2 == 2 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol_beton_potolok_grey/grey potolok 1111.png';
                }
                // пол керамика , бетон стена и бетон потолок без мебели 
                if (i == 1 && i1 == 2 && i2 == 1 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/keramika_potolok(beton)/pol(keramika) beton beton 0000.png';
                }
                // пол керамика , бетон стена и бетон потолок мебель
                if (i == 1 && i1 == 2 && i2 == 1 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/keramika_potolok(beton)/pol(keramika) beton beton 1111.png';
                }
                // бетонная стена, пол ламинат, потолок серый, без мебели
                if (i == 1 && i1 == 3 && i2 == 2 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol(laminat)_potolok(grey)/beton_pol(laninat)_potolok(grey) 0000.png';
                }
                // бетонная стена, пол ламинат, потолок серый, с мебелью
                if (i == 1 && i1 == 3 && i2 == 2 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol(laminat)_potolok(grey)/beton_pol(laninat)_potolok(grey) 1111.png';
                }
                // бетонная стена, пол ламинат, потолок бетон, без мебели
                if (i == 1 && i1 == 3 && i2 == 1 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol(laminat)_stena(beton)_potolok(beton)/pol(laminat)_stena(beton)_potolok(beton) 0000.png';
                }
                // бетонная стена, пол ламинат, потолок бетон, с мебелью
                if (i == 1 && i1 == 3 && i2 == 1 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol(laminat)_stena(beton)_potolok(beton)/pol(laminat)_stena(beton)_potolok(beton) 1111.png';
                }
                // бетонная стена , пол керамика, потолок серый, без мебели
                if (i == 1 && i1 == 2 && i2 == 2 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
						'img konstrukt/beton/pol(keramika)_stena(beto)_potolok(grey)/pol(keramika)_stena(beto)_potolok(grey) 0000.png';
                }
                // бетонная стена , пол керамика, потолок серый, без мебели
                if (i == 1 && i1 == 2 && i2 == 2 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/beton/pol(keramika)_stena(beto)_potolok(grey)/pol(keramika)_stena(beto)_potolok(grey) 1111.png';        
                }
                // кирпичная стена, бетонный пол, потолок бетон, без мебели
                if (i == 2 && i1 == 1 && i2 == 1 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(beton)_potolok(beton)/stena(kirpich)_pol(beton)_potolok(beton) 0.png';        
                }
                // кирпичная стена, бетонный пол, потолок бетон, с мебелью
                if (i == 2 && i1 == 1 && i2 == 1 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(beton)_potolok(beton)/stena(kirpich)_pol(beton)_potolok(beton) 1.png';        
                }
                // кирпичная стена, пол ламинат, потолок серый , без мебели
                if (i == 2 && i1 == 3 && i2 == 2 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(laminat)_potolok(grey)/stena(kirpich)_pol(laminat)_potolok(grey) 0.png';        
                }
                // кирпичная стена, пол ламинат, потолок серый , с мебелью
                if (i == 2 && i1 == 3 && i2 == 2 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(laminat)_potolok(grey)/stena(kirpich)_pol(laminat)_potolok(grey) 1.png';        
                }
                // кирпичная стена, керамический пол, серый потолок, без мебели
                if (i == 2 && i1 == 2 && i2 == 2 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(keramika)_potolok(grey)/stena(kirpich)_pol(keramika)_potolok(grey) 0.png';        
                }
                // кирпичная стена, керамический пол, серый потолок, с мебелью
                if (i == 2 && i1 == 2 && i2 == 2 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(keramika)_potolok(grey)/stena(kirpich)_pol(keramika)_potolok(grey) 1.png';        
                }
                // кирпичная стена, керамический пол, бетонный потолок, без мебели
                if (i == 2 && i1 == 2 && i2 == 1 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(keramika)_potolok(beton)/stena(kirpich)_pol(keramika)_potolok(beton) 0.png';        
                }
                // кирпичная стена, керамический пол, бетонный потолок, с мебелью
                if (i == 2 && i1 == 2 && i2 == 1 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(keramika)_potolok(beton)/stena(kirpich)_pol(keramika)_potolok(beton) 1.png';        
                }
                // кирпичная стена, бетонный пол, серый потолок, без мебели
                if (i == 2 && i1 == 1 && i2 == 2 && i3 == 1) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(beton)_potolok(grey)/stena(kirpich)_pol(beton)_potolok(grey) 0.png';        
                }
                // кирпичная стена, бетонный пол, серый потолок, с мебелью
                if (i == 2 && i1 == 1 && i2 == 2 && i3 == 2) {
					console.log('все в бетоне с мебелью');

					document.images['nam'].src =
                        'img konstrukt/kirpich/stena(kirpich)_pol(beton)_potolok(grey)/stena(kirpich)_pol(beton)_potolok(grey) 1.png';        
                }
			};