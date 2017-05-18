import Vue from 'vue'
import Pokelist from '@/components/Pokelist'

describe('Pokelist.vue', () => {
  //a basic store for vuex related testing
  const store = {
    state: {
      pokelist: {},
      pokemon: {},
      isFetching: {}
    },
    mutations: {
      FETCH_POKELIST (state){
        state.pokelist= {
          "count": 811,
          "previous": null,
          "next": "https://pokeapi.co/api/v2/pokemon/?offset=20",
          "results": [
            {
              "url": "https://pokeapi.co/api/v2/pokemon/1/",
              "name": "bulbasaur"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/2/",
              "name": "ivysaur"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/3/",
              "name": "venusaur"
            },
          ]
        }
      },
      FETCH_POKEMON (state){
        state.pokemon = {//scaled down bulbasaur data
          "forms": [
            {
              "url": "http://pokeapi.co/api/v2/pokemon-form/1/",
              "name": "bulbasaur"
            }
          ],
          "abilities": [
            {
              "slot": 3,
              "is_hidden": true,
              "ability": {
                "url": "http://pokeapi.co/api/v2/ability/34/",
                "name": "chlorophyll"
              }
            },
            {
              "slot": 1,
              "is_hidden": false,
              "ability": {
                "url": "http://pokeapi.co/api/v2/ability/65/",
                "name": "overgrow"
              }
            }
          ],
          "stats": [
            {
              "stat": {
                "url": "http://pokeapi.co/api/v2/stat/6/",
                "name": "speed"
              },
              "effort": 0,
              "base_stat": 45
            },
            {
              "stat": {
                "url": "http://pokeapi.co/api/v2/stat/5/",
                "name": "special-defense"
              },
              "effort": 0,
              "base_stat": 65
            }
          ],
          "name": "bulbasaur",
          "weight": 69,
          "moves": [
            {
              "version_group_details": [
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 4,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 3,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 1,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                  },
                  "level_learned_at": 1,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                  }
                }
              ],
              "move": {
                "url": "http://pokeapi.co/api/v2/move/45/",
                "name": "growl"
              }
            },
            {
              "version_group_details": [
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                  }
                },
                {
                  "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                  },
                  "level_learned_at": 0,
                  "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                  }
                }
              ],
              "move": {
                "url": "http://pokeapi.co/api/v2/move/70/",
                "name": "strength"
              }
            }
          ],
          "sprites": {
            "back_female": null,
            "back_shiny_female": null,
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            "front_female": null,
            "front_shiny_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
          },
          "held_items": [],
          "location_area_encounters": "/api/v2/pokemon/1/encounters",
          "height": 7,
          "is_default": true,
          "species": {
            "url": "http://pokeapi.co/api/v2/pokemon-species/1/",
            "name": "bulbasaur"
          },
          "id": 1,
          "order": 1,
          "game_indices": [
            {
              "version": {
                "url": "http://pokeapi.co/api/v2/version/22/",
                "name": "white-2"
              },
              "game_index": 1
            },
            {
              "version": {
                "url": "http://pokeapi.co/api/v2/version/2/",
                "name": "blue"
              },
              "game_index": 153
            },
            {
              "version": {
                "url": "http://pokeapi.co/api/v2/version/1/",
                "name": "red"
              },
              "game_index": 153
            }
          ],
          "base_experience": 64,
          "types": [
            {
              "slot": 2,
              "type": {
                "url": "http://pokeapi.co/api/v2/type/4/",
                "name": "poison"
              }
            },
            {
              "slot": 1,
              "type": {
                "url": "http://pokeapi.co/api/v2/type/12/",
                "name": "grass"
              }
            }
          ]
        }
      }
    }
  }

  it('sets the correct default data', () => {
    expect(typeof Pokelist.data).to.equal('function')
    expect(Pokelist.data().pagenumber).to.equal(1)
    expect(Pokelist.data().isLoading).to.equal(false)
  })
})
